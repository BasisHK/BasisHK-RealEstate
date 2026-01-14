from PIL import Image, ImageDraw, ImageFont
import os

# Constants
WIDTH = 1200
HEIGHT = 630
BG_COLOR = "#0f172a"  # Deep Navy
TEXT_COLOR = "#ffffff"
ACCENT_COLOR = "#d4af37"  # Soft Gold
TEAL_COLOR = "#2dd4bf"    # Teal

def create_og_image():
    # Create base image
    img = Image.new('RGB', (WIDTH, HEIGHT), color=BG_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Add subtle gradient/mesh effect (simulated with circles)
    draw.ellipse([(-100, -100), (400, 400)], fill="#1e293b")
    draw.ellipse([(800, 300), (1300, 800)], fill="#1e293b")
    
    # Load fonts (using Noto Serif/Sans as fallbacks since Playfair/Inter download failed)
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSerif-Bold.ttf", 120)
        subtitle_font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf", 50)
        logo_font = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSerif-Bold.ttf", 200)
    except OSError:
        # Fallback to default if Noto not found
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        logo_font = ImageFont.load_default()

    # Draw Logo Icon (Stylized B)
    # Draw a circle for the logo background
    logo_x, logo_y = 150, 315
    draw.ellipse([(logo_x-100, logo_y-100), (logo_x+100, logo_y+100)], outline=ACCENT_COLOR, width=4)
    
    # Draw 'B' text
    draw.text((logo_x, logo_y), "B", font=logo_font, fill="white", anchor="mm")
    
    # Draw Teal dot
    draw.ellipse([(logo_x+60, logo_y+60), (logo_x+80, logo_y+80)], fill=TEAL_COLOR)

    # Draw Text
    text_x = 350
    
    # Brand Name
    draw.text((text_x, 200), "BasisHK", font=title_font, fill=TEXT_COLOR)
    
    # Tagline
    tagline = "Automated Growth for\nElite Real Estate Agents"
    draw.text((text_x, 350), tagline, font=subtitle_font, fill=ACCENT_COLOR, spacing=20)

    # Save image
    output_path = "/home/ubuntu/hk-property-leads/client/public/og-image.png"
    img.save(output_path)
    print(f"OG Image saved to {output_path}")

if __name__ == "__main__":
    create_og_image()
