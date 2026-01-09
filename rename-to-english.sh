#!/bin/bash

# Script to rename German folder/file names to English
# Content remains unchanged (German)

BASE="/mnt/c/Users/SebastianAmaro/source/AP1-Vorbereitung/learning-material/de"

# Function to rename using sed patterns
rename_path() {
    local path="$1"
    echo "$path" | sed \
        -e 's/pruefungsueberblick/exam-overview/g' \
        -e 's/pruefungskatalog/exam-catalog/g' \
        -e 's/pruefungsvorbereitung/exam-preparation/g' \
        -e 's/pruefungssimulationen/exam-simulations/g' \
        -e 's/ihk-pruefungsstruktur/ihk-exam-structure/g' \
        -e 's/lernstrategie/learning-strategy/g' \
        -e 's/projektmanagement/project-management/g' \
        -e 's/projektdefinition/project-definition/g' \
        -e 's/projektphasen/project-phases/g' \
        -e 's/qualitaetsmanagement/quality-management/g' \
        -e 's/qualitaetsbegriff/quality-concept/g' \
        -e 's/datenschutz/data-protection/g' \
        -e 's/it-sicherheit/it-security/g' \
        -e 's/it-systeme/it-systems/g' \
        -e 's/netzwerke/networks/g' \
        -e 's/netzwerkgrundlagen/network-fundamentals/g' \
        -e 's/netzwerk-troubleshooting/network-troubleshooting/g' \
        -e 's/netzwerk-hardware/network-hardware/g' \
        -e 's/arbeits-geschaeftsprozesse/business-processes/g' \
        -e 's/support-kommunikation/support-communication/g' \
        -e 's/grundlagen/fundamentals/g' \
        -e 's/planungstools/planning-tools/g' \
        -e 's/vorgehensmodelle/process-models/g' \
        -e 's/dokumentation/documentation/g' \
        -e 's/teamarbeit/teamwork/g' \
        -e 's/teambildungsphasen/team-formation-phases/g' \
        -e 's/reflexionsmethoden/reflection-methods/g' \
        -e 's/normen-zertifizierung/standards-certification/g' \
        -e 's/zertifizierung/certification/g' \
        -e 's/management-ansaetze/management-approaches/g' \
        -e 's/softwarequalitaet/software-quality/g' \
        -e 's/barrierefreiheit/accessibility/g' \
        -e 's/technische-massnahmen/technical-measures/g' \
        -e 's/personenbezogene-daten/personal-data/g' \
        -e 's/betroffenenrechte/data-subject-rights/g' \
        -e 's/anonymisierung-pseudonymisierung/anonymization-pseudonymization/g' \
        -e 's/standard-datenschutzmodell/standard-data-protection-model/g' \
        -e 's/rollen-verantwortlichkeiten/roles-responsibilities/g' \
        -e 's/schutzziele/protection-goals/g' \
        -e 's/bedrohungen-gefaehrdungen/threats-risks/g' \
        -e 's/bedrohungsarten/threat-types/g' \
        -e 's/schutzbedarfsanalyse/protection-needs-analysis/g' \
        -e 's/schutzmassnahmen/protective-measures/g' \
        -e 's/authentifizierung/authentication/g' \
        -e 's/os-haertung/os-hardening/g' \
        -e 's/personal-firewall/personal-firewall/g' \
        -e 's/kryptografie/cryptography/g' \
        -e 's/verschluesselungsverfahren/encryption-methods/g' \
        -e 's/hashwerte/hash-values/g' \
        -e 's/zertifikate/certificates/g' \
        -e 's/digitale-signaturen/digital-signatures/g' \
        -e 's/bits-bytes-zahlensysteme/bits-bytes-number-systems/g' \
        -e 's/zeichenkodierung/character-encoding/g' \
        -e 's/prozessoren/processors/g' \
        -e 's/speicher-ram/memory-ram/g' \
        -e 's/datenspeicher-hdd-ssd/storage-hdd-ssd/g' \
        -e 's/nas-verfuegbarkeit/nas-availability/g' \
        -e 's/schnittstellen/interfaces/g' \
        -e 's/grafikkarten/graphics-cards/g' \
        -e 's/betriebssysteme/operating-systems/g' \
        -e 's/grundlagen-betriebssysteme/operating-systems-basics/g' \
        -e 's/kommandozeile/command-line/g' \
        -e 's/virtualisierung-cloud/virtualization-cloud/g' \
        -e 's/virtualisierung/virtualization/g' \
        -e 's/virtuelle-desktops/virtual-desktops/g' \
        -e 's/datensicherung/data-backup/g' \
        -e 's/backup-arten/backup-types/g' \
        -e 's/backup-strategien/backup-strategies/g' \
        -e 's/kuenstliche-intelligenz/artificial-intelligence/g' \
        -e 's/ki-grundlagen/ai-fundamentals/g' \
        -e 's/ki-anwendungen/ai-applications/g' \
        -e 's/ki-codeassistenten/ai-code-assistants/g' \
        -e 's/industrie-40/industry-40/g' \
        -e 's/unternehmenssoftware/enterprise-software/g' \
        -e 's/erp-systeme/erp-systems/g' \
        -e 's/energie-umwelt/energy-environment/g' \
        -e 's/energieeffizienz/energy-efficiency/g' \
        -e 's/geraeteklassen/device-classes/g' \
        -e 's/softwarearten/software-types/g' \
        -e 's/programmierparadigmen/programming-paradigms/g' \
        -e 's/beurteilungskriterien/evaluation-criteria/g' \
        -e 's/programmierung/programming/g' \
        -e 's/variablen-datentypen/variables-datatypes/g' \
        -e 's/kontrollstrukturen/control-structures/g' \
        -e 's/prozeduren-funktionen/procedures-functions/g' \
        -e 's/oop-grundlagen/oop-basics/g' \
        -e 's/schreibtischtest/desk-check/g' \
        -e 's/fehlersuche-code/code-debugging/g' \
        -e 's/klassendiagramm/class-diagram/g' \
        -e 's/use-case-diagramm/use-case-diagram/g' \
        -e 's/aktivitaetsdiagramm/activity-diagram/g' \
        -e 's/datenbanken/databases/g' \
        -e 's/relationale-datenbanken/relational-databases/g' \
        -e 's/redundanz-normalformen/redundancy-normal-forms/g' \
        -e 's/webentwicklung/web-development/g' \
        -e 's/entwicklungsprozess/development-process/g' \
        -e 's/lizenzen/licenses/g' \
        -e 's/urheberrecht/copyright/g' \
        -e 's/lizenzarten/license-types/g' \
        -e 's/ip-adressierung/ip-addressing/g' \
        -e 's/verkabelung/cabling/g' \
        -e 's/strukturierte-verkabelung/structured-cabling/g' \
        -e 's/kupferkabel/copper-cables/g' \
        -e 's/datenuebertragung/data-transmission/g' \
        -e 's/uebertragungsraten/transmission-rates/g' \
        -e 's/diagnose-tools/diagnostic-tools/g' \
        -e 's/fehlersuche/troubleshooting/g' \
        -e 's/fernwartung/remote-maintenance/g' \
        -e 's/domaene-integration/domain-integration/g' \
        -e 's/unternehmen/enterprise/g' \
        -e 's/unternehmensumfeld/business-environment/g' \
        -e 's/marktformen/market-forms/g' \
        -e 's/vertriebsformen/distribution-channels/g' \
        -e 's/aufbauorganisation/organizational-structure/g' \
        -e 's/wirtschaftlichkeit/economics/g' \
        -e 's/kosten-kostenarten/costs-cost-types/g' \
        -e 's/nutzwertanalyse/utility-analysis/g' \
        -e 's/angebotsvergleich/offer-comparison/g' \
        -e 's/beschaffung/procurement/g' \
        -e 's/beschaffungsprozess/procurement-process/g' \
        -e 's/wertschoepfung/value-chain/g' \
        -e 's/vertragsrecht/contract-law/g' \
        -e 's/vertragsarten/contract-types/g' \
        -e 's/vertragsbestandteile/contract-components/g' \
        -e 's/vertragsstoerungen/contract-disruptions/g' \
        -e 's/preisbildung/pricing/g' \
        -e 's/preiskalkulation/price-calculation/g' \
        -e 's/serviceanfragen/service-requests/g' \
        -e 's/ticketsystem/ticket-system/g' \
        -e 's/kommunikation/communication/g' \
        -e 's/kommunikationsarten/communication-types/g' \
        -e 's/vier-ohren-modell/four-ears-model/g' \
        -e 's/konfliktmanagement/conflict-management/g' \
        -e 's/fehlermanagement/error-management/g' \
        -e 's/fehleranalyse/error-analysis/g' \
        -e 's/stoerungsmanagement/incident-management/g' \
        -e 's/uebungsaufgaben/practice-exercises/g' \
        -e 's/loesungen/solutions/g' \
        -e 's/loesung/solution/g' \
        -e 's/simulation-reisebuero/simulation-travel-agency/g' \
        -e 's/simulation-versicherung/simulation-insurance/g' \
        -e 's/simulation-cnc-industrie40/simulation-cnc-industry40/g' \
        -e 's/uebersicht/overview/g' \
        -e 's/lastenheft-pflichtenheft/requirements-specification/g' \
        -e 's/bedarfsanalyse/needs-analysis/g' \
        -e 's/wasserfallmodell/waterfall-model/g' \
        -e 's/qm-systeme/qm-systems/g' \
        -e 's/dsgvo-grundsaetze/gdpr-principles/g' \
        -e 's/smart-prinzip/smart-principle/g' \
        -e 's/gantt-diagramm/gantt-chart/g' \
        -e 's/bsi-grundschutz/bsi-baseline-protection/g' \
        -e 's/protokolle/protocols/g' \
        -e 's/wlan-grundlagen/wlan-basics/g' \
        -e 's/service-level/service-level/g'
}

echo "=== Renaming files and folders to English ==="
echo ""

# Step 1: Rename all files (deepest first)
echo "Step 1: Renaming files..."
find "$BASE" -type f -name "*.md" | sort -r | while read -r file; do
    dir=$(dirname "$file")
    filename=$(basename "$file")
    newfilename=$(rename_path "$filename")
    if [ "$filename" != "$newfilename" ]; then
        echo "  $filename -> $newfilename"
        mv "$file" "$dir/$newfilename"
    fi
done

# Step 2: Rename directories (deepest first - by depth)
echo ""
echo "Step 2: Renaming directories..."
for depth in $(seq 10 -1 1); do
    find "$BASE" -mindepth $depth -maxdepth $depth -type d 2>/dev/null | while read -r dir; do
        parent=$(dirname "$dir")
        dirname=$(basename "$dir")
        newdirname=$(rename_path "$dirname")
        if [ "$dirname" != "$newdirname" ]; then
            echo "  $dirname -> $newdirname"
            mv "$dir" "$parent/$newdirname"
        fi
    done
done

echo ""
echo "=== Renaming complete ==="
echo ""
echo "Next step: Update internal cross-references in markdown files"
