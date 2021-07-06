# National Science Foundation SBIR Phase II (Build) Project
This is the home of the NSF SBIR Phase II (Build) Project.

## Getting started

Most of our documentation can be found in the **[wiki](https://github.com/engiip/nsf-sbir/wiki)**. You can also find us in the #nsf-sbir Slack channel.

### Set up the site locally
To set up the site on your local machine, follow these steps:

1. [Install and configure Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup). If you're not comfortable with the command line, try [GitHub Desktop](https://desktop.github.com/).
1. Download, install, and start [Docker Community Edition](https://www.docker.com/community-edition).
1. Clone the site. [More detail on this](https://help.github.com/articles/cloning-a-repository/).

    ```sh
    git clone https://github.com/18F/nsf-sbir.git
    ```

1. Run the site!

    ```sh
    ./serve
    ```

1. Visit at http://localhost:4000/site/

### Creating new pages

You can create a new page by running the following command:

```bash
./new-page [name-of-page]
```

It will then create a file in the pages directory with the essential Jekyll front matter needed to get the page up and running


## Accessibility

To check locally, we use [`pa11y-ci`](https://github.com/pa11y/ci).

To get it working, do the following:

1. Install `pa11y-ci` on the command line if you haven't already: `npm install pa11y-ci -g`
2. In one terminal tab, get the site running:
  a. `./serve` will create a local version of the site at http://localhost:4000/site/
  a. `bundle exec jekyll serve` will create a local version of the site at http://localhost:4000/
3. Then, in a new tab lint the site:
  a. If you used the `./serve` command:
    ```sh
    pa11y-ci --sitemap http://localhost:4000/site/sitemap.xml --sitemap-exclude ".pdf"
    ```
  b. If you used the `bundle exec jekyll serve` command:
    ```sh
    pa11y-ci --sitemap http://localhost:4000/sitemap.xml --sitemap-exclude ".pdf"
    ```
4. Alternatively, to check a single url:
  a. If you used the `./serve` command:
    ```sh
    pa11y-ci http://localhost:4000/site/[name of link]
    ```
  b. If you used the `bundle exec jekyll serve` command:
    ```sh
    pa11y-ci http://localhost:4000/[name of link]
    ```

## Awards History maintenance

### Changing the awards history data through a local build

This is the preferred method because it ultimately allows for faster builds.  The steps are as follows:

  1. Update the awards history.

     In the `data` directory (not `_data`), replace `awards-history.json` and/or `pitchbook.json` with the latest from the [shared drive](https://drive.google.com/drive/u/0/folders/1PrihQNKC98SbBR2u6q_pFRbAp1htn2c0).

  2. Update the Jekyll config.

     In `_config.yml`:
     ```
     awards_history:
       generate_support_data: true
       download_limit: 0
       autocomplete:
         use: true
         suggestions: 10
     ```

  3. Build the site.

     Run `bundle exec jekyll serve`. Before building, Jekyll will udpate the support data based on the latest awards history:

     * _data/awards_history_ac_index.yml (autocomplete index - *usually changed*)
     * _data/awards_history_years.yml (years spanned by the latest history - *occasionally changed*)
     * _data/awards_history_state_codes.yml (state locations - *occasionally changed*)

     Run `git status` to see which support data was changed.

  4. Commit the changes.

     * data/awards-history.json (and/or pitchbook.json)
     * _config.yml
     * _data/awards_history_*.yml

  5. Revert the Jekyll config back to false (then commit change).

     In `_config.yml`:
     ```
     awards_history:
       generate_support_data: false
       download_limit: 0
       autocomplete:
         use: true
         suggestions: 10
     ```

     This **optimizes the build process** by causing Jekyll to skip the support data generation until necessary (when the awards history is changed).

  6. Push the changes upstream.

     Run `git push origin` and follow Github instructions if necessary.

### Changing the awards history data directly in Github

The steps are as follows:

  1. Update the awards history and commit the change(s).

     In the `data` directory (not `_data`), replace `awards-history.json` and/or `pitchbook.json` with the latest from the [shared drive](https://drive.google.com/drive/u/0/folders/1PrihQNKC98SbBR2u6q_pFRbAp1htn2c0).

  2. Update the Jekyll config and commit the change.

     In `_config.yml`:
     ```
     awards_history:
       generate_support_data: true
       download_limit: 0
       autocomplete:
         use: true
         suggestions: 10
     ```
     Since there's no local build, the flag must remain `true` to ensure the support data is updated when building on Federalist.  Fortunately, the builds don't take much longer.
