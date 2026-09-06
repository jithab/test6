import re
import sys
import json


def clean_vtt(file_path):
    buffer = ""

    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()

    skip_block = False

    for line in lines:
        line = line.strip()

        # Skip completely empty lines
        if not line:
            continue

        # Skip WEBVTT header
        if line.startswith("WEBVTT"):
            continue

        # Skip STYLE / NOTE / REGION blocks
        if line.startswith(("STYLE", "NOTE", "REGION")):
            skip_block = True
            continue

        if skip_block:
            if line == "":
                skip_block = False
            continue

        # Skip numeric cue identifiers (e.g., 1, 2, 3...)
        if line.isdigit():
            continue

        # Skip timing lines
        if "-->" in line:
            continue

        # Remove inline HTML/formatting tags (e.g., <c>, <i>, <b>, etc.)
        line = re.sub(r"<[^>]+>", "", line)

        # Remove extra whitespace
        line = re.sub(r"\s+", " ", line).strip()

        if line:
            buffer += " " + line

    # Normalize whitespace in full text
    buffer = re.sub(r"\s+", " ", buffer).strip()

    # Split into sentences using punctuation
    sentences = re.split(r'(?<=[.!?])\s+', buffer)

    # Clean and remove empty sentences
    sentences = [s.strip() for s in sentences if s.strip()]

    return sentences


def main():
    if len(sys.argv) != 2:
        print("Usage: python clean_vtt.py input.vtt")
        sys.exit(1)

    file_path = sys.argv[1]
    sentences = clean_vtt(file_path)

    # Convert to required JSON format
    json_output = [{"de": sentence} for sentence in sentences]

    # Print JSON output
    print(json.dumps(json_output, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()

