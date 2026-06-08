# barbarametzler.github.io

Personal academic website of Barbara Metzler, built with [Jekyll](https://jekyllrb.com/)
and the [al-folio](https://github.com/alshedivat/al-folio) theme, hosted on GitHub Pages.

## Editing the site

Most content lives in a few places:

| What | Where |
| --- | --- |
| Bio / homepage | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` |
| News items | `_news/` |
| Social links | `_data/socials.yml` |
| Site settings | `_config.yml` |
| Profile photo | `assets/img/prof_pic.jpg` |

## Running locally (Windows)

Ruby 3.3 and the theme's gems are already installed. To preview:

```powershell
# adds Ruby + ImageMagick to PATH for this session
$env:PATH = "C:\Ruby33-x64\bin;C:\Program Files\ImageMagick-7.1.2-Q16-HDRI;" + $env:PATH
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000/>. Edits to content reload automatically.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes it to the
`gh-pages` branch. GitHub Pages serves the site from that branch.
