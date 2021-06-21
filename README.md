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

Anytime the awards history changes, the system needs to make sure several pieces of supporting data are current:
  * The autocomplete index
  * The list of states
  * The list of years

### Changing the awards history data directly in Github

1.  In `_config.yml`, under awards_history, set generate_support_data to true:
```
awards_history:
  generate_support_data: true
  download_limit: 0
  autocomplete:
    use: true
    suggestions: 10
```

2. Replace `data/awards-history.json` **(not _data/)** with the latest from the [shared drive](https://drive.google.com/drive/u/0/folders/1PrihQNKC98SbBR2u6q_pFRbAp1htn2c0).

3. In `_config.yml`, set generate_support_data to back to false:
```
awards_history:
  generate_support_data: false
  download_limit: 0
  autocomplete:
    use: true
    suggestions: 10
```

### Changing the awards history data through a local build

1.  In `_config.yml`, under awards_history, set generate_support_data to true:
```
awards_history:
  generate_support_data: true
  download_limit: 0
  autocomplete:
    use: true
    suggestions: 10
```

2. Replace `data/awards-history.json` **(not _data/)** with the latest from the [shared drive](https://drive.google.com/drive/u/0/folders/1PrihQNKC98SbBR2u6q_pFRbAp1htn2c0).

3. Run `bundle exec jekyll serve`.  This may change any of the following:

  * _data/awards_history_ac_index.yml
  * _data/awards_history_years.yml
  * _data/awards_history_state_codes.yml

4. Commit your changes, then in `_config.yml`, set generate_support_data to back to false:
```
awards_history:
  generate_support_data: false
  download_limit: 0
  autocomplete:
    use: true
    suggestions: 10
```

and commit your changes.

## Pitchbook data maintenance

Simply replace `data/pitchbook.json` **(not _data/)** with the latest from the [shared drive](https://drive.google.com/drive/u/0/folders/1PrihQNKC98SbBR2u6q_pFRbAp1htn2c0), and commit your change.