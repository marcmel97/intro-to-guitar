<p align="center"><a href=""><img alt="code logo" title="code" src="./public/images/bienvenido.png" /></a></p>

<p align="center">
  Aprende a tocar guitarra introductoria con este curso 
</p>

## Info from Original Repository

Get Started
Set up Node.js v14+
Clone this repo
Run npm install
Run npm run dev to start the dev server
Open http://localhost:3000 in a browser
Configure Your Course
There are several things to configure before getting started.

course.json
This json file allows you to configure the details of the site. Update the info here and it'll update it everywhere throughout the course website.

author.name – Your name
author.company – The company you work at or whatever you want as your subtitle. Optional.
title – The title of your course
subtitle – The subtitle of your course. Optional.
frontendMastersLink – A link to the published video on FrontendMasters.com. Optional.
social.linkedin - Your LinkedIn public user name, just the name, not the full link. Optional
social.twitter – Your Twitter user name. Optional.
social.github – Your GitHub user name. Optional.
description – The description you want to show up in search engine results.
keywords – The SEO keywords for this course. An array of strings
productionBaseUrl – Typically useful for GitHub Pages. This adds a base path to your project. For GitHub Pages, this will be the name of your repo. For example, this site's base URL is /next-course-starter because the production URL for this site is btholt.github.io/next-course-starer. Do note this will also make your dev server's base URL this as well so you can catch problems before they go to production.
csvPath – A CSV with the meta data for your lessons will be created at this path when you build or export the project. If you delete this config option it will not generate a CSV.
styles/variables.css
Here is where you can theme your site. You can retheme the whole site with just these.

public/images
Here is where you should stick all your images. Inside of your markdown, refer to images in this folder as ./images/<image file name>.

Note this site doesn't use next/image because that requires the server component.

public/images/author.jpg
Your image. If you call it this, you won't have to change any code. If you need to change it, it's in pages/index.js.

public/images/social-share-cover.jpg
The image that will be used if someone shares your website to Twitter/Facebook/etc. If you call it this, you won't have to change any code. If you do need to change it, it's in pages/index.js

public/images/course-icon.png
The image at the top of the course. If you call it this, you won't have to change any code. If you do need to change it, it's in pages/index.js

Favicon
Just replace the favicon* files and the apple-touch-icon.png in the public/images directory. If you have a PNG, favicon.io will generate these files for you. If you don't want favicons, just remove the references to them in pages/_app.js.

Lessons
All your markdown lesson files will go in lessons/. They must be organized an named this way:

The folders must be named 01-section-one-name, 02-section-two-name, 03-section-three, etc.

The lessons are then grouped inside of these, the lessons are ordered by letters, A-lesson-one.md, B-lesson-two.md, C-lesson-three.md, etc. This numbering scheme matches how Frontend Masters organizes their content.

The titles of your lessons and sections are generated from the folder and lesson names (and can be overridden.) The first, organizing part of the name is stripped (the 01- part of 01-section-one and the A- part of A-lesson-one), the hyphens are turned into spaces (section-one becomes section one) and then those are run through title-case (so section one becomes Section One.) If you need to override these, use the frontmatter (explained below.)

The folder and lesson names are also used for the slugs. 02-section-two/C-lesson-three.md becomes yoursite.com/lessons/section-two/lesson-three.

Each of these lessons can have a frontmatter for the following properties

title – If you want the title to be different from the file name, you can specify here what that title should be. Frequently this useful for things where the capitalization would be off e.g. TailwindCSS instead of Tailwindcss. Optional.
description – If you want to give individual lessons descriptions for SEO and for Frontend Masters, you can write a brief description here.
Be aware because of how the numbers and letters are stripped out, it is possible to have ambigious paths. 01-welcome/A-intro.md and 03-welcome/D-intro.md would resolve to the same thing and only the first one would be visitable.

meta.json
Each section (e.g. inside of 03-section-three folder) folder can have a meta.json file, and is totally optional.

title – an override for the title of the section. Frequently useful for capitalization e.g. JS Tools instead of Js Tools.
icon – so you can set the icon used in the home page and the header. These icons are pulled from the free Font Awesome v5 icons. If you want fa-hammer, use "hammer" as the value for icon.
highlight.js Theme
The code blocks use Highlight.js. By default it will use a11y-light as the theme for the code blocks. Change the CSS import in pages/_app.js to the theme you want to use.

GitHub Pages / GitHub Actions
By default this repo works with GitHub Pages. Just make sure you set the productionBaseUrl in the course.json to the name of the repo.

It also includes a GitHub Action to automatically deploy to your gh-pages branch. Just make sure that your repo has GitHub Pages enabled and the branch is set to gh-pages. If you're not deploying to GitHub Pages go ahead and delete the .github directory.

By default the GitHub Action looks for a main branch, so be sure you're using that instead of master.

If you want a custom domain, make sure you uncomment the fqdn field in .github/workflows/next.yaml file and put your custom domain. If you don't do that and only set it up with the GitHub web GUI, every deploy will break the custom domain.

Example Sites
This repo itself
Complete Intro to React v6
Complete Intro to React v7
Complete Intro to Web Dev v3
npm commands
npm run dev - Next's dev command. Start a local dev server. Note if you have a productionBasePath set in your course.json, your dev server will respect that (so you don't mess up your paths in production.)
npm run build - Build your site for production. This will still include the Next.js server run time. Use this if you're using something like Vercel to host your site.
npm run export - Builds your site statically, use this if you're going to deploy to GitHub Pages, S3, or somewhere else with no server. This will run next build and then next export (no need to run build yourself first.)
npm run start - Start an already-built server.
npm run csv – Will generate the CSV of the metadata from your course. Note you may have to run build first, depending on your csvPath.
Analytics
By default this doesn't generate any analytics. If you are creating a Frontend Masters course and would like a weekly report of analytics, contact me (Brian Holt) and I'll give you a snippet to drop on your page (though fair warning, I will also have access to your data, if that bothers you.)

Otherwise I'm pretty pleased with Simple Analytics (this is a referral link, free month for me and free month for you); I've been using them for my courses personally.

License
The code is this repo is licensed under the Apache 2.0 license.

I include the CC-BY-NC-4.0 license for the content; this is what I recommend you license your content under: anyone can use and share the content but they cannot sell it; only you can.