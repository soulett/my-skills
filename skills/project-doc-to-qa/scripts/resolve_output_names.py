from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


INVALID_FILENAME_CHARS = r'[<>:"/\\|?*]'
TITLE_PATTERNS = [
    re.compile(r"^\s*#\s+(.+?)\s*$", re.MULTILINE),
    re.compile(r"^\s*项目名称\s*[:：]\s*(.+?)\s*$", re.MULTILINE),
    re.compile(r"^\s*(?:Project|题目)\s*[:：]\s*(.+?)\s*$", re.MULTILINE | re.IGNORECASE),
]


def read_text(path: Path) -> str:
    for encoding in ("utf-8", "utf-8-sig", "gb18030"):
        try:
            return path.read_text(encoding=encoding)
        except UnicodeDecodeError:
            continue
    return path.read_text(encoding="utf-8", errors="ignore")


def extract_title(text: str) -> str | None:
    for pattern in TITLE_PATTERNS:
        match = pattern.search(text)
        if match:
            return match.group(1).strip()
    return None


def sanitize_title(title: str) -> str:
    cleaned = re.sub(INVALID_FILENAME_CHARS, "_", title).strip()
    cleaned = re.sub(r"\s+", " ", cleaned)
    cleaned = cleaned.rstrip(". ")
    return cleaned or "项目"


def derive_title(path: Path) -> str:
    if path.exists() and path.is_file():
        title = extract_title(read_text(path))
        if title:
            return sanitize_title(title)
    return sanitize_title(path.stem or "项目")


def build_output_paths(source_path: Path, title: str) -> dict[str, str]:
    directory = source_path.parent if source_path.suffix else source_path
    return {
        "project_title": title,
        "full_output": str(directory / f"{title}_问答文档.md"),
        "high_frequency_output": str(directory / f"{title}_高频问答文档.md"),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Resolve output filenames for project Q&A documents.")
    parser.add_argument("source", help="Source file path or directory path.")
    args = parser.parse_args()

    source_path = Path(args.source).expanduser().resolve()
    title = derive_title(source_path)
    print(json.dumps(build_output_paths(source_path, title), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
