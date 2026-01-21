import drawBot as db
import frontmatter
import glob
import os


# COLOURS

themecols = {
    "blue": {
        "text": (1, 1, 1),  # white
        "accent": [c / 255 for c in (131, 9, 192)],
    },
    "red": {
        "text": (1, 1, 1),  # white
        "accent": [c / 255 for c in (224, 46, 22)],
    },
    "sand": {
        "text": (0, 0, 0),  # black
        "accent": [c / 255 for c in (239, 189, 8)],
    },
}


def saveStoryMain(outpath, title, authors, categories, theme):
    DR = "Design Regression".upper()
    w, h = 1080, 1920
    mainpad = 60

    # get theme colours
    textcol = themecols[theme]["text"]
    bgcol = themecols[theme]["accent"]
    db.newPage(w, h)
    # background
    db.fill(*bgcol)
    db.stroke(None)
    db.rect(0, 0, w, h)
    # logo
    with db.savedState():
        db.translate(mainpad, h - 3 * mainpad)
        db.scale(2)
        db.fill(*textcol)
        db.font("AdapterPEDisplay-Eb")
        db.openTypeFeatures(ss14=True)
        db.fontSize(24)
        db.tracking(1)
        db.text(DR, (0, 0))
        tw, _ = db.textSize(DR)
        db.lineCap("round")
        db.stroke(*textcol)
        db.strokeWidth(4)
        db.translate(0, -10)
        db.line((2, 0), (tw - 4, 0))
    # categories & authors
    padx, pady = 30, 17
    with db.savedState():
        db.translate(mainpad, h * 0.72)
        db.scale(2)
        db.fill(*textcol)
        db.font("AdapterMonoPE-Sb")
        db.fontSize(14)
        db.tracking(1)
        tw1, th1 = db.textSize(categories)
        tw2, _ = db.textSize(authors)
        db.text(categories, (padx, 3))
        db.text(authors, (3 * padx + tw1, 3))
        # frame
        db.fill(None)
        db.stroke(*textcol)
        db.strokeWidth(1)
        boxh= th1 + 2 * pady
        db.translate(0, -pady)
        db.rect(0, 0, tw1 + tw2 + 4 * padx, boxh)
        db.translate(2 * padx + tw1, 0)
        db.line((0, 0), (0, boxh))
    # title
    with db.savedState():
        db.translate(mainpad, mainpad)
        db.fill(*textcol)
        db.font("AdapterPEDisplay-Bl")
        db.fontSize(132)
        #db.tracking(-0.05)
        db.fill(*textcol)
        db.textBox(title, (0, 0, w - 2 * mainpad, h * 0.65))
    dirs = os.path.dirname(outpath)
    print(dirs)
    if not os.path.exists(dirs):
        os.makedirs(dirs)
        print("-----", dirs)
    db.saveImage(outpath)
    print("Saved to:", outpath)


def saveStorySecondary(outpath, title, authors, categories, theme, intro):
    DR = "Design Regression".upper()
    w, h = 1080, 1920
    mainpad = 60

    # get theme colours
    textcol = themecols[theme]["text"]
    bgcol = themecols[theme]["accent"]
    db.newPage(w, h)
    # background
    db.fill(*bgcol)
    db.stroke(None)
    db.rect(0, 0, w, h)
    # logo
    with db.savedState():
        db.translate(mainpad, h - 3 * mainpad)
        db.scale(2)
        db.fill(*textcol)
        db.font("AdapterPEDisplay-Eb")
        db.openTypeFeatures(ss14=True)
        db.fontSize(24)
        db.tracking(1)
        db.text(DR, (0, 0))
        tw, _ = db.textSize(DR)
        db.lineCap("round")
        db.stroke(*textcol)
        db.strokeWidth(4)
        db.translate(0, -10)
        db.line((2, 0), (tw - 4, 0))
    # categories & authors
    padx, pady = 30, 17
    with db.savedState():
        db.translate(mainpad, h * 0.71)
        db.fill(*textcol)
        db.font("AdapterMonoPE-Sb")
        db.fontSize(24)
        db.tracking(1)
        tw1, th1 = db.textSize(categories)
        tw2, _ = db.textSize(authors)
        db.text(categories, (padx, 3))
        db.text(authors, (3 * padx + tw1, 3))
        # frame
        db.fill(None)
        db.stroke(*textcol)
        db.strokeWidth(1)
        boxh= th1 + 2 * pady
        db.translate(0, -pady)
        db.rect(0, 0, tw1 + tw2 + 4 * padx, boxh)
        db.translate(2 * padx + tw1, 0)
        db.line((0, 0), (0, boxh))
    # title
    with db.savedState():
        db.translate(mainpad, mainpad)
        db.fill(*textcol)
        db.font("AdapterPEDisplay-Bl")
        db.fontSize(72)
        #db.tracking(-0.05)
        db.fill(*textcol)
        db.textBox(title, (0, 0, w - 2 * mainpad, h * 0.65))
        _, th = db.textSize(title, align="left", width = (w - 2 * mainpad))
    # intro
    with db.savedState():
        db.translate(mainpad, mainpad)
        db.fill(*textcol)
        db.font("AdapterPEText-Me")
        db.fontSize(64)
        #db.hyphenation(True)
        #db.tracking(-0.05)
        db.fill(*textcol)
        db.textBox(intro, (mainpad, 0, w - 3 * mainpad, h * 0.65 - th - 64))
    dirs = os.path.dirname(outpath)
    print(dirs)
    if not os.path.exists(dirs):
        os.makedirs(dirs)
        print("-----", dirs)
    db.saveImage(outpath)
    print("Saved to:", outpath)

# run this from the main directory for each post
os.chdir(os.path.dirname(__file__) + "/..")
for path in glob.glob("_posts/*.md"):
    # get post meta
    post = frontmatter.load(path)
    name, _ = os.path.splitext(os.path.basename(path))
    if "published" in post and not post["published"]:
        continue
    if "title" in post:
        title = post["title"]
    else:
        title = "Untitle"
    if "intro" in post:
        intro = post["intro"]
    else:
        intro = ""
    if "authors" in post:
        authors = (", ".join(post["authors"])).upper()
    else:
        authors = "ANONYMOUS"
    if "categories" in post:
        categories = (", ".join(post["categories"])).upper()
    else:
        categories = "POST"
    if "theme" in post:
        theme = post["theme"]
    else:
        theme = "blue"
    saveStoryMain(
        "social-media/instagram/%s_story.png" % name, title, authors, categories, theme
    )
    # saveStorySecondary(
    #     "social-media/instagram/%s_story-2.png" % name, title, authors, categories, theme, intro,
    # )
