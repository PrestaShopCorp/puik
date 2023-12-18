#!/bin/bash

# Path to the versions.json file
VERSIONS_FILE="./packages-tars/versions.json"

# Iterate over all .tgz files in packages-tars/tmp
for TGZ_PATH in ./packages-tars/tmp/*.tgz; do
    # Extract the package name from the .tgz filename
    PACKAGE_NAME=$(basename $TGZ_PATH | sed -n -e 's/^prestashopcorp-\(.*\)-0.0.1.tgz$/\1/p')

    echo "Processing $PACKAGE_NAME..."

    # Check if versions.json exists, if not, create it
    if [ ! -f "$VERSIONS_FILE" ]; then
        echo "Creating $VERSIONS_FILE..."
        echo "{}" > $VERSIONS_FILE
    fi

    # Read the current version of the package from versions.json
    CURRENT_VERSION=$(grep -Po "\"$PACKAGE_NAME\": \"\K[^\"]+" $VERSIONS_FILE)

    # If no version is found, use 0.0.0 as default and add a new entry to versions.json
    if [ -z "$CURRENT_VERSION" ]; then
        echo "No current version found for $PACKAGE_NAME. Using 0.0.0 as default..."
        CURRENT_VERSION="0.0.0"
        # Add a comma if versions.json is not empty
        if [ "$(cat $VERSIONS_FILE)" != "{}" ]; then
            sed -i "s/}/, \"${PACKAGE_NAME}\": \"${CURRENT_VERSION}\"}/" $VERSIONS_FILE
        else
            echo "{\"$PACKAGE_NAME\": \"$CURRENT_VERSION\"}" > $VERSIONS_FILE
        fi
    fi

    echo "Current version of $PACKAGE_NAME is $CURRENT_VERSION."

    # Increment the version
    IFS='.' read -ra VERSION_PARTS <<< "$CURRENT_VERSION"
    VERSION_PARTS[2]=$((VERSION_PARTS[2] + 1))
    NEW_VERSION="${VERSION_PARTS[0]}.${VERSION_PARTS[1]}.${VERSION_PARTS[2]}"

    echo "New version of $PACKAGE_NAME is $NEW_VERSION."

    # Update versions.json with the new version
    echo "Updating $VERSIONS_FILE with new version for $PACKAGE_NAME..."
    sed -i "s/\"$PACKAGE_NAME\": \"$CURRENT_VERSION\"/\"$PACKAGE_NAME\": \"$NEW_VERSION\"/" $VERSIONS_FILE

    # Move and rename the .tgz file
    echo "Moving $TGZ_PATH to ./packages-tars/prestashopcorp-$PACKAGE_NAME-$NEW_VERSION.tgz..."
    mv "$TGZ_PATH" "./packages-tars/prestashopcorp-$PACKAGE_NAME-$NEW_VERSION.tgz"
done
