#!/bin/bash

# Chemin vers le fichier versions.json
VERSIONS_FILE="./packages-tars/versions.json"

# Créez les répertoires packages-tars et packages-tars/tmp s'ils n'existent pas
if [ ! -d "./packages-tars" ]; then
    mkdir -p "./packages-tars"
fi

if [ ! -d "./packages-tars/tmp" ]; then
    mkdir -p "./packages-tars/tmp"
fi

# Parcourez tous les fichiers .tgz dans packages-tars/tmp
for TGZ_PATH in ./packages-tars/tmp/*.tgz; do
    # Extrait le nom du package du nom de fichier .tgz
    PACKAGE_NAME=$(basename $TGZ_PATH | sed -n -e 's/^prestashopcorp-\(.*\)-[0-9]*\.[0-9]*\.[0-9]*\.tgz$/\1/p')

    echo "Traitement de $PACKAGE_NAME..."

    # Vérifie si versions.json existe, sinon, créez-le
    if [ ! -f "$VERSIONS_FILE" ]; then
        echo "Création de $VERSIONS_FILE..."
        echo "{}" > $VERSIONS_FILE
    fi

    # Lisez la version actuelle du package à partir de versions.json
    CURRENT_VERSION=$(grep -Po "\"$PACKAGE_NAME\": \"\K[^\"]+" $VERSIONS_FILE)

    # Si aucune version n'est trouvée, utilisez 0.0.0-test-0 par défaut et ajoutez une nouvelle entrée à versions.json
    if [ -z "$CURRENT_VERSION" ]; then
        echo "Aucune version actuelle trouvée pour $PACKAGE_NAME. Utilisation de 0.0.0-test-0 par défaut..."
        CURRENT_VERSION="0.0.0-test-0"
        # Ajoutez une virgule si versions.json n'est pas vide
        if [ "$(cat $VERSIONS_FILE)" != "{}" ]; then
            sed -i "s/}/, \"${PACKAGE_NAME}\": \"${CURRENT_VERSION}\"}/" $VERSIONS_FILE
        else
            echo "{\"$PACKAGE_NAME\": \"$CURRENT_VERSION\"}" > $VERSIONS_FILE
        fi
    fi

    echo "La version actuelle de $PACKAGE_NAME est $CURRENT_VERSION."

    # Incrémentez la version
    IFS='.' read -ra VERSION_PARTS <<< "$CURRENT_VERSION"
    VERSION_BASE="${VERSION_PARTS[0]}.${VERSION_PARTS[1]}.${VERSION_PARTS[2]}"

    # Initialisez le suffixe de la version de test
    TEST_VERSION_SUFFIX=0

    # Vérifiez si la version de base a déjà un suffixe de test
    if [[ $CURRENT_VERSION == *"-test-"* ]]; then
        # Extrait le suffixe de la version de test
        TEST_VERSION_SUFFIX=$(echo $CURRENT_VERSION | sed -n -e 's/^.*-test-\([0-9]*\)$/\1/p')
        # Supprimez le suffixe de test existant de la version de base
        VERSION_BASE=$(echo $VERSION_BASE | sed -n -e 's/^\(.*\)-test-.*$/\1/p')
    fi

    # Incrémentez le suffixe de la version de test
    TEST_VERSION_SUFFIX=$((TEST_VERSION_SUFFIX + 1))

    # Construisez la nouvelle version
    NEW_VERSION="${VERSION_BASE}-test-${TEST_VERSION_SUFFIX}"

    echo "La nouvelle version de $PACKAGE_NAME est $NEW_VERSION."

    # Mettez à jour versions.json avec la nouvelle version
    echo "Mise à jour de $VERSIONS_FILE avec la nouvelle version pour $PACKAGE_NAME..."
    sed -i "s/\"$PACKAGE_NAME\": \"$CURRENT_VERSION\"/\"$PACKAGE_NAME\": \"$NEW_VERSION\"/" $VERSIONS_FILE

    # Déplacez et renommez le fichier .tgz
    echo "Déplacement de $TGZ_PATH vers ./packages-tars/prestashopcorp-$PACKAGE_NAME-$NEW_VERSION.tgz..."
    mv "$TGZ_PATH" "./packages-tars/prestashopcorp-$PACKAGE_NAME-$NEW_VERSION.tgz"
done
