# Learner Error Analysis Package

This package contains the reorganized learner benchmark error analysis materials.

## Open the Viewer

Open:

```text
index.html
```

The viewer contains all 1,079 learner benchmark sentences and shows:

- source sentence
- target correction
- gold source tokenization
- `D` Direct segmentation
- `P1` Identical-character projection
- `P2` Similarity-based projection

Token colors:

- green: predicted token span matches the gold source token span
- red: predicted token span does not match the gold source token span
- blue: gold token

The viewer supports filters for:

- sentence_id / text search
- D / P1 / P2 good or bad status
- quick G/B combinations such as `B B G` and `G B G`
- error type: over / under / drift
- source length threshold: 10 / 20 / 30 / 40 / 50 characters
- whether the relevant method has two or more local errors. If one or more methods are set to `Bad`, this filter applies to those bad-selected methods; otherwise it applies to any method.
- P2 fixes D or P1

No server is required. Open the GitHub Pages link, or open `index.html` directly in a browser.

## Detailed Data

The `data/` folder contains two backup files for detailed checking:

- `all_errors.csv`  
  All 614 local error records. Each row includes sentence_id, method, error type, gold/predicted tokenization, local span, boundaries, and explanation.

- `error_categories_and_examples.md`  
  Table 4 distribution, G/B pattern examples, method-specific 2+ error sentence candidates, P2 fix examples, projection failure examples, and gold annotation check examples.

## Table 4 Counts

The local error counts match the intended Table 4 distribution:

| Method | Local errors | Over | Under | Drift |
|---|---:|---:|---:|---:|
| D Direct segmentation | 227 | 172 | 52 | 3 |
| P1 Identical-character projection | 211 | 120 | 88 | 3 |
| P2 Similarity-based projection | 176 | 88 | 84 | 4 |
