from pathlib import Path
import math
import textwrap

import imageio.v2 as imageio
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "tmp" / "product-hunt"
SCREENSHOT_DIR = ROOT / "tmp" / "screenshots"

WIDTH = 1280
HEIGHT = 720
FPS = 24

BG = "#f4f0e9"
INK = "#111b18"
MUTED = "#52635e"
DARK = "#101c18"
GREEN = "#20362f"
LINE = "#ddd5c9"
CORAL = "#df745c"
CREAM = "#fffaf2"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    candidates = {
        "serif": [
            "C:/Windows/Fonts/georgia.ttf",
            "C:/Windows/Fonts/Georgia.ttf",
            "C:/Windows/Fonts/times.ttf",
        ],
        "sans": [
            "C:/Windows/Fonts/segoeui.ttf",
            "C:/Windows/Fonts/arial.ttf",
        ],
        "sans_bold": [
            "C:/Windows/Fonts/segoeuib.ttf",
            "C:/Windows/Fonts/arialbd.ttf",
        ],
    }

    for candidate in candidates[name]:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default(size=size)


FONT_SERIF_88 = font("serif", 88)
FONT_SERIF_72 = font("serif", 72)
FONT_SERIF_56 = font("serif", 56)
FONT_SERIF_44 = font("serif", 44)
FONT_SERIF_36 = font("serif", 36)
FONT_SANS_34 = font("sans", 34)
FONT_SANS_28 = font("sans", 28)
FONT_SANS_24 = font("sans", 24)
FONT_SANS_18 = font("sans", 18)
FONT_BOLD_24 = font("sans_bold", 24)
FONT_BOLD_18 = font("sans_bold", 18)


def ease(t: float) -> float:
    t = max(0.0, min(1.0, t))
    return 0.5 - math.cos(t * math.pi) / 2


def alpha_composite(base: Image.Image, overlay: Image.Image, x: int = 0, y: int = 0) -> None:
    base.alpha_composite(overlay, (x, y))


def rounded_rect(draw: ImageDraw.ImageDraw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def draw_text_block(draw: ImageDraw.ImageDraw, xy, text, font_obj, fill, width_chars, line_gap=8):
    x, y = xy
    lines = []
    for paragraph in text.split("\n"):
        if not paragraph.strip():
            lines.append("")
            continue
        lines.extend(textwrap.wrap(paragraph, width=width_chars))

    current_y = y
    for line in lines:
        draw.text((x, current_y), line, font=font_obj, fill=fill)
        bbox = draw.textbbox((x, current_y), line or " ", font=font_obj)
        current_y += (bbox[3] - bbox[1]) + line_gap
    return current_y


def fit_contain(image: Image.Image, max_w: int, max_h: int) -> Image.Image:
    src_w, src_h = image.size
    scale = min(max_w / src_w, max_h / src_h)
    return image.resize((int(src_w * scale), int(src_h * scale)), Image.Resampling.LANCZOS)


def screenshot_card(path: Path, max_w: int, max_h: int, shadow=True) -> Image.Image:
    shot = Image.open(path).convert("RGBA")
    shot = fit_contain(shot, max_w, max_h)
    pad = 18
    card = Image.new("RGBA", (shot.width + pad * 2, shot.height + pad * 2), (0, 0, 0, 0))

    if shadow:
        shadow_layer = Image.new("RGBA", card.size, (0, 0, 0, 0))
        shadow_draw = ImageDraw.Draw(shadow_layer)
        shadow_draw.rounded_rectangle((10, 12, card.width - 4, card.height - 4), radius=18, fill=(19, 28, 24, 42))
        shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(16))
        card.alpha_composite(shadow_layer)

    draw = ImageDraw.Draw(card)
    rounded_rect(draw, (0, 0, card.width - 18, card.height - 20), 12, "#fffaf2", LINE, 1)
    card.alpha_composite(shot, (pad, pad))
    return card


def base_frame() -> Image.Image:
    img = Image.new("RGBA", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, WIDTH, 76), fill=CREAM)
    draw.line((0, 76, WIDTH, 76), fill=LINE, width=1)
    draw.rectangle((92, 25, 120, 53), fill=DARK)
    draw.text((101, 27), "M", font=FONT_BOLD_18, fill=CREAM)
    draw.text((132, 27), "Mirror Affirmations", font=FONT_BOLD_18, fill=INK)
    draw.text((1085, 29), "No account. No feed.", font=FONT_SANS_18, fill=MUTED)
    return img


def add_footer_url(img: Image.Image) -> None:
    draw = ImageDraw.Draw(img)
    draw.text((92, 663), "mirroraffirmations.online", font=FONT_BOLD_18, fill=GREEN)
    draw.line((92, 646, 1188, 646), fill=LINE, width=1)


def draw_badges(draw: ImageDraw.ImageDraw, badges, x: int, y: int):
    cursor = x
    for badge in badges:
        text_w = draw.textbbox((0, 0), badge, font=FONT_BOLD_18)[2]
        rounded_rect(draw, (cursor, y, cursor + text_w + 28, y + 38), 19, "#ffffff", LINE, 1)
        draw.text((cursor + 14, y + 9), badge, font=FONT_BOLD_18, fill=GREEN)
        cursor += text_w + 42


def opening_scene(progress: float) -> Image.Image:
    img = base_frame()
    draw = ImageDraw.Draw(img)
    y_offset = int((1 - ease(progress)) * 20)
    draw.text((92, 154 + y_offset), "Mirror\nAffirmations", font=FONT_SERIF_88, fill=INK, spacing=2)
    draw.text((725, 165), "01", font=FONT_SANS_24, fill=CORAL)
    draw_text_block(
        draw,
        (92, 398 + y_offset),
        "A private mirror practice for saying one gentle thing to yourself.",
        FONT_SANS_34,
        INK,
        42,
        10,
    )
    draw_text_block(
        draw,
        (92, 510 + y_offset),
        "Choose a prompt, look at yourself, and read it out loud once.",
        FONT_SANS_24,
        MUTED,
        58,
        8,
    )

    phone = Image.new("RGBA", (330, 455), (0, 0, 0, 0))
    phone_draw = ImageDraw.Draw(phone)
    rounded_rect(phone_draw, (0, 0, 330, 455), 34, "#13221d")
    rounded_rect(phone_draw, (18, 32, 312, 388), 18, "#223832", "#51665e", 1)
    phone_draw.line((110, 32, 240, 388), fill=(255, 250, 242, 30), width=9)
    rounded_rect(phone_draw, (48, 178, 282, 312), 6, "#111c18", "#52635e", 1)
    phone_draw.text((86, 188), "I can let\ntoday be\nenough.", font=FONT_SERIF_36, fill=CREAM, spacing=0)
    rounded_rect(phone_draw, (74, 407, 256, 438), 15, CORAL)
    phone_draw.text((112, 414), "Practice", font=FONT_BOLD_18, fill="#fffaf2")
    alpha_composite(img, phone, 835, 150 + int((1 - ease(progress)) * 18))
    add_footer_url(img)
    return img


def screenshot_scene(progress: float, shot_name: str, title: str, body: str, side="left") -> Image.Image:
    img = base_frame()
    draw = ImageDraw.Draw(img)
    shot = screenshot_card(SCREENSHOT_DIR / shot_name, 720, 460)
    drift = int((ease(progress) - 0.5) * 22)
    if side == "left":
        alpha_composite(img, shot, 68 + drift, 132)
        text_x = 815
    else:
        alpha_composite(img, shot, 495 - drift, 132)
        text_x = 92
    draw_text_block(draw, (text_x, 190), title, FONT_SERIF_44, INK, 21, 8)
    draw_text_block(draw, (text_x, 310), body, FONT_SANS_24, MUTED, 28, 10)
    draw_badges(draw, ["Private", "Simple", "Gentle"], text_x, 468)
    add_footer_url(img)
    return img


def privacy_scene(progress: float) -> Image.Image:
    img = base_frame()
    draw = ImageDraw.Draw(img)
    draw.text((92, 150), "Privacy is the product boundary.", font=FONT_SERIF_72, fill=INK)
    draw_text_block(
        draw,
        (92, 260),
        "The browser demo uses camera preview only. It does not record, save, or upload video.",
        FONT_SANS_28,
        MUTED,
        62,
        10,
    )
    items = [
        ("No account", "Try it without signing in."),
        ("No recording", "The web demo is practice-only."),
        ("No upload", "Camera preview stays in the browser."),
    ]
    x = 92
    for index, (title, body) in enumerate(items):
        card_x = x + index * 365
        rounded_rect(draw, (card_x, 410, card_x + 322, 548), 8, "#fffaf2", LINE, 1)
        draw.ellipse((card_x + 24, 438, card_x + 64, 478), fill=GREEN)
        draw.text((card_x + 38, 443), str(index + 1), font=FONT_BOLD_18, fill=CREAM)
        draw.text((card_x + 82, 430), title, font=FONT_BOLD_24, fill=INK)
        draw_text_block(draw, (card_x + 82, 470), body, FONT_SANS_18, MUTED, 28, 6)
    add_footer_url(img)
    return img


def closing_scene(progress: float) -> Image.Image:
    img = base_frame()
    draw = ImageDraw.Draw(img)
    card = screenshot_card(SCREENSHOT_DIR / "waitlist-desktop.png", 520, 360)
    alpha_composite(img, card, 660, 175)
    draw.text((92, 158), "Help shape the\nlocal video app.", font=FONT_SERIF_72, fill=INK, spacing=4)
    draw_text_block(
        draw,
        (92, 380),
        "Join the waitlist if you want local-only recording, private history, and gentle reminders later.",
        FONT_SANS_24,
        MUTED,
        42,
        10,
    )
    rounded_rect(draw, (92, 515, 375, 574), 6, DARK)
    draw.text((121, 531), "Try the browser demo", font=FONT_BOLD_18, fill=CREAM)
    draw.text((92, 608), "Mirror Affirmations is not a therapy or crisis service.", font=FONT_SANS_18, fill=MUTED)
    add_footer_url(img)
    return img


SCENES = [
    (0.0, 4.2, opening_scene),
    (
        4.2,
        10.4,
        lambda p: screenshot_scene(
            p,
            "home-desktop.png",
            "Start with one gentle line.",
            "Open the practice, choose a prompt, and keep the words visible while you look at yourself.",
            "left",
        ),
    ),
    (
        10.4,
        17.2,
        lambda p: screenshot_scene(
            p,
            "demo-desktop-final.png",
            "Make it comfortable.",
            "Switch categories, adjust text size, move the prompt, or practice without the camera.",
            "right",
        ),
    ),
    (17.2, 23.4, privacy_scene),
    (23.4, 32.0, closing_scene),
]


def fade_in(frame: Image.Image, amount: float) -> Image.Image:
    amount = max(0.0, min(1.0, amount))
    bg = Image.new("RGBA", (WIDTH, HEIGHT), BG)
    return Image.blend(bg, frame, amount)


def frame_at(second: float) -> Image.Image:
    for start, end, fn in SCENES:
        if start <= second < end:
            local = (second - start) / (end - start)
            frame = fn(local)
            if second - start < 0.4:
                return fade_in(frame, (second - start) / 0.4)
            if end - second < 0.35:
                return fade_in(frame, (end - second) / 0.35)
            return frame
    return closing_scene(1)


def render() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    cover = opening_scene(1.0)
    cover.save(OUT_DIR / "product-hunt-cover.png")

    output = OUT_DIR / "product-hunt-demo.mp4"
    duration = SCENES[-1][1]
    total_frames = int(duration * FPS)
    with imageio.get_writer(output, fps=FPS, codec="libx264", quality=8, macro_block_size=16) as writer:
        for frame_index in range(total_frames):
            second = frame_index / FPS
            frame = frame_at(second).convert("RGB")
            writer.append_data(np.asarray(frame))

    print(f"Wrote {output}")
    print(f"Wrote {OUT_DIR / 'product-hunt-cover.png'}")


if __name__ == "__main__":
    render()
