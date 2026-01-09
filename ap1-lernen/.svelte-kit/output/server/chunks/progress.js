import { w as writable, g as get } from "./index.js";
function getStoredProgress() {
  return {};
}
function createProgressStore() {
  const { subscribe, set, update } = writable(getStoredProgress());
  return {
    subscribe,
    markRead: (topicId) => {
      update((state) => {
        const newState = {
          ...state,
          [topicId]: {
            status: "read",
            lastRead: (/* @__PURE__ */ new Date()).toISOString()
          }
        };
        return newState;
      });
    },
    markReview: (topicId) => {
      update((state) => {
        const newState = {
          ...state,
          [topicId]: {
            status: "review",
            lastRead: state[topicId]?.lastRead || (/* @__PURE__ */ new Date()).toISOString()
          }
        };
        return newState;
      });
    },
    markUnread: (topicId) => {
      update((state) => {
        const { [topicId]: _, ...rest } = state;
        return rest;
      });
    },
    toggleStatus: (topicId) => {
      update((state) => {
        const current = state[topicId]?.status || "unread";
        let newStatus;
        if (current === "unread") newStatus = "read";
        else if (current === "read") newStatus = "review";
        else newStatus = "unread";
        let newState;
        if (newStatus === "unread") {
          const { [topicId]: _, ...rest } = state;
          newState = rest;
        } else {
          newState = {
            ...state,
            [topicId]: {
              status: newStatus,
              lastRead: (/* @__PURE__ */ new Date()).toISOString()
            }
          };
        }
        return newState;
      });
    },
    getStatus: (topicId) => {
      const state = get({ subscribe });
      return state[topicId]?.status || "unread";
    },
    reset: () => {
      const newState = {};
      set(newState);
    }
  };
}
const progress = createProgressStore();
function getChapterProgress(manifest, progressState) {
  if (!manifest) return { total: 0, read: 0, review: 0 };
  let total = 0;
  let read = 0;
  let review = 0;
  function countTopics(topics) {
    for (const topic of topics) {
      total++;
      const status = progressState[topic.id]?.status;
      if (status === "read") read++;
      else if (status === "review") review++;
    }
  }
  function processChapter(chapter) {
    countTopics(chapter.topics);
    for (const sub of chapter.subchapters) {
      countTopics(sub.topics);
    }
  }
  for (const chapter of manifest.chapters) {
    processChapter(chapter);
  }
  return { total, read, review };
}
function getReviewTopics(manifest, progressState) {
  if (!manifest) return [];
  const reviewTopics = [];
  function findReviewTopics(topics, chapterTitle) {
    for (const topic of topics) {
      if (progressState[topic.id]?.status === "review") {
        reviewTopics.push({ ...topic, chapterTitle });
      }
    }
  }
  for (const chapter of manifest.chapters) {
    findReviewTopics(chapter.topics, chapter.title);
    for (const sub of chapter.subchapters) {
      findReviewTopics(sub.topics, chapter.title);
    }
  }
  return reviewTopics;
}
export {
  getReviewTopics as a,
  getChapterProgress as g,
  progress as p
};
