# Reading Design

TBD

## Adding content

The site is built from the Markdown (.md) files in this repository and hosted on Github pages. To add a new article add a new file in the `_posts` directory and follow the pattern of existing posts:

- name the file by date and title, without spaces or non-ascii characters
- set the article metadata in the "Front Matter" (between the `---`)
- author your article in the [Markdown syntax](https://daringfireball.net/projects/markdown/)
- to preview your edits:
    - you need [Ruby](https://www.ruby-lang.org) installed on your system
    - install Jekyll locally, run `gem install`
    - run the Jekyll site locally with `bundle exec jekyll serve`
    - the local preview server address is output to the terminal, usually something like:
        > Server address: http://127.0.0.1:4000/
    - to stop the server, press `control + c`
- when you are happy with your edits, make a commit and push it to Github

### Development

The project is built with static site generator [Jekyll](https://jekyllrb.com/). You will require Ruby to run and preview the site locally before committing any changes to the repository. To run a local preview follow the steps above under "Adding content".

To recompile or update the icon fonts, you need to separately install the `fontcustom` gem and re-compile (after editing or adding SVG files in `/icons`): 
```
gem install fontcustom
fontcustom compile
```

The styles in `/assets/css` automatically get compiled from the `scss` [Sass](https://sass-lang.com/) files.

`/layouts` and `/includes` contain the template files of the site. `_data` contains additional data to build the navigation and other metadata. `/_config.yml` holds the site configuration and `/_site` is the pre-built static version of the compiled site.