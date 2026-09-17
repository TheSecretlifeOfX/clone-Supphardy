import type { Product } from '@/types';

// Seed catalog (snapshot of the live Supabase `products` table).
// Used as a fallback when Supabase env vars are not configured.
export const SEED_PRODUCTS: Product[] = [
  {
    "id": "42",
    "name": "Marine Collagen Unflavored",
    "description": "11 grams protein per serving ✅ 12 grams Collagen per serving ✅ Youthful appearance ✅ fresh and firm looking skin ✅ Supports bones and Joints ✅ Gluten and cholesterol free ✅ Soy free ✅ Dairy free ✅ Sugar and additives free ✅",
    "full_description": "Marine Collagen Unflavored delivers 11g of protein and 12g of collagen per serving for youthful appearance, fresh and firm looking skin, and joint support. This pure formula is free from gluten, cholesterol, soy, dairy, sugar, and additives.",
    "price": 65000,
    "image": "https://i.imgur.com/RPWaAkK.jpeg",
    "category": "Collagen",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 40,
    "benefits": [
      "11 grams protein per serving",
      "12 grams Collagen per serving",
      "Youthful appearance",
      "fresh and firm looking skin",
      "Supports bones and Joints",
      "Gluten and cholesterol free",
      "Soy free",
      "Dairy free",
      "Sugar and additives free"
    ],
    "ingredients": [
      "Pure Marine Collagen Peptides"
    ],
    "usage": "Mix 1 scoop with 8oz of water, coffee, smoothies, or food. Can be taken any time of day."
  },
  {
    "id": "40",
    "name": "Marine Collagen",
    "description": "Youthful appearance ✅ fresh and firm looking skin ✅ Supports bones and Joints ✅ Gluten and cholesterol free ✅ Soy free ✅ Dairy free ✅ Sugar and additives free ✅",
    "full_description": "Marine Collagen provides highly bioavailable Type I collagen peptides for youthful appearance, fresh and firm looking skin, and support for bones and joints. This premium supplement is free from gluten, cholesterol, soy, dairy, sugar, and additives.",
    "price": 65000,
    "image": "https://i.imgur.com/lFuX8oP.jpeg",
    "category": "Collagen",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 50,
    "benefits": [
      "Youthful appearance",
      "fresh and firm looking skin",
      "Supports bones and Joints",
      "Gluten and cholesterol free",
      "Soy free",
      "Dairy free",
      "Sugar and additives free"
    ],
    "ingredients": [
      "Marine Collagen Peptides (Type I)",
      "Vitamin C",
      "Hyaluronic Acid"
    ],
    "usage": "Mix 1 scoop with 8oz of water, juice, or your favorite beverage. Can be taken any time of day."
  },
  {
    "id": "26",
    "name": "Applied Nutrition Creatine Monohydrate (Unflavored)",
    "description": "5grams per serving ✅ Increase Strength ✅ Improve Performance ✅ Grow Muscle ✅",
    "full_description": "Applied Nutrition Unflavored Creatine Monohydrate delivers 5g of pure creatine per serving. Designed to increase strength, improve performance, and support muscle growth.",
    "price": 40000,
    "image": "https://i.imgur.com/uvSBOKL.jpeg",
    "category": "Creatine",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 55,
    "benefits": [
      "5grams per serving",
      "Increase Strength",
      "Improve Performance",
      "Grow Muscle"
    ],
    "ingredients": [
      "Creatine Monohydrate",
      "Citric Acid",
      "Sucralose",
      "Micronized"
    ],
    "usage": "Mix 1 scoop with 8oz of water. Consume 1 serving daily, preferably post-workout."
  },
  {
    "id": "28",
    "name": "Platinum Creatine Monohydrate",
    "description": "80 servings ✅ New design ✅",
    "full_description": "Platinum Creatine Monohydrate features a new design and delivers 80 servings of pharmaceutical-grade creatine to support strength, power, and muscle fullness for serious athletes.",
    "price": 70000,
    "image": "https://i.imgur.com/NN5WIoz.jpeg",
    "category": "Creatine",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 40,
    "benefits": [
      "80 servings",
      "New design",
      "Maximum purity",
      "Micronized for better absorption"
    ],
    "ingredients": [
      "Micronized Creatine Monohydrate (99.9% purity)"
    ],
    "usage": "Mix 1 scoop with 8oz of water. Consume 1 serving daily, preferably post-workout."
  },
  {
    "id": "31",
    "name": "AN Creatine 100 servings 💥",
    "description": "Micronized for easy absorption ✅ Flavorless ✅ 5 grams per serving ✅ Increase strength ✅ Improve performance ✅ Muscle growth ✅",
    "full_description": "AN Creatine delivers 100 servings of premium micronized creatine monohydrate. This flavorless formula provides 5g per serving to increase strength, improve performance, and support muscle growth for serious athletes.",
    "price": 70000,
    "image": "https://i.imgur.com/UvbtQfk.jpeg",
    "category": "Creatine",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 50,
    "benefits": [
      "Micronized for easy absorption",
      "Flavorless",
      "5 grams per serving",
      "Increase strength",
      "Improve performance",
      "Muscle growth"
    ],
    "ingredients": [
      "Micronized Creatine Monohydrate (99.9% purity)"
    ],
    "usage": "Mix 1 scoop (5g) with 8oz of water or your favorite beverage. Consume 1 serving daily."
  },
  {
    "id": "30",
    "name": "ON Creatine Monohydrate 600g",
    "description": "120 Servings ✅ 5 grams per serving ✅",
    "full_description": "Optimum Nutrition Creatine Monohydrate (600g) provides 120 servings of pure, micronized creatine at 5g per serving for enhanced strength, power, and muscle fullness.",
    "price": 95000,
    "image": "https://i.imgur.com/SO3vcAZ.jpeg",
    "category": "Creatine",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 45,
    "benefits": [
      "120 Servings",
      "5 grams per serving",
      "Maximum purity",
      "Supports muscle strength and power"
    ],
    "ingredients": [
      "Micronized Creatine Monohydrate (99.9% purity)"
    ],
    "usage": "Take 5g (1 teaspoon) daily. During loading phase, take 20g daily for 5-7 days, divided into 4 servings."
  },
  {
    "id": "25",
    "name": "ON Creatine Monohydrate 300g (unflavored)",
    "description": "60 Servings ✅ 5 grams per serving ✅ unflavored ✅",
    "full_description": "Optimum Nutrition Creatine Monohydrate (300g) provides 60 servings of pure creatine at 5g per serving. This pharmaceutical-grade creatine is designed to increase strength, power, and overall performance.",
    "price": 59000,
    "image": "https://i.imgur.com/KDoWTty.jpeg",
    "category": "Creatine",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 90,
    "benefits": [
      "60 Servings",
      "5 grams per serving",
      "Highest purity available",
      "Micronized for easy mixing"
    ],
    "ingredients": [
      "Micronized Creatine Monohydrate (99.9% purity)"
    ],
    "usage": "Take 5g (1 teaspoon) daily. During loading phase, take 20g daily for 5-7 days, divided into 4 servings."
  },
  {
    "id": "36",
    "name": "2in1 Creatine and Testosterone Stack 💥",
    "description": "250g Ashwaganda ✅ Male Performance ✅ 5g Creatine ✅ Vitamin B3 ✅ Vitamin B6 ✅ Vitamin D3 ✅ Zinc ✅ Increased Strength ✅",
    "full_description": "⚠️ Flavors may vary based on availability, and all pictures posted are for reference only. Kindly confirm your preferred flavor (if available) when ordering. SuppHardy delivers quality, always.💪🏾",
    "price": 60000,
    "image": "https://i.imgur.com/uLkiN1k.jpeg",
    "category": "Creatine",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 50,
    "benefits": [
      "Increased Strength and Performance",
      "Enhanced Muscle Growth and Recovery",
      "Testosterone Support",
      "Reduced Fatigue",
      "Overall Wellness"
    ],
    "ingredients": [
      "Creatine Monohydrate",
      "Testosterone-Supporting Ingredients",
      "Vitamins and Minerals"
    ],
    "usage": "Mix one scoop with approximately 200ml of cold water and shake well."
  },
  {
    "id": "88",
    "name": "AN Creatine 200 Servings💥 ",
    "description": "",
    "full_description": "AN Creatine 200 Servings💥 \n(🇳🇬100k / 🇬🇭 ₵900)\nMicronized for easy absorption ✅\nFlavorless✅\n5grams per serving ✅\nIncrease Strength✅\nImprove Performance✅\nGrow Muscle ✅",
    "price": 100000,
    "image": "https://i.imgur.com/104ICRU.jpeg",
    "category": "Creatine",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 20,
    "benefits": [],
    "ingredients": [],
    "usage": ""
  },
  {
    "id": "83",
    "name": "AN Vitamin C 1000💥",
    "description": "100 capsules per bottle (100-day supply) ✅ Supports recovery and reduces exercise-induced stress ✅ Halal-certified product ✅ Tested for athletes and produced under GMP standards ✅",
    "full_description": "Supports collagen formation for skin, joints, and connective tissue health. Helps fight oxidative stress as a strong antioxidant. ",
    "price": 45000,
    "image": "https://i.imgur.com/a4hOywb.jpeg",
    "category": "Health",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 60,
    "benefits": [
      "Immune System Boost, Powerful Antioxidant, Skin Method & Collagen Production,Enhanced Nutrient Absorption, Heart & Joint Health"
    ],
    "ingredients": [
      "Ascorbic Acid,  Citrus Bioflavonoids, Rose Hips, Microcrystalline Cellulose"
    ],
    "usage": "Generally, one 1000mg tablet is taken daily, preferably during or after a meal."
  },
  {
    "id": "57",
    "name": "Applied Nutrition Cream of Rice",
    "description": "Carbohydrates for Mass Gain ✅ 67 servings ✅",
    "full_description": "Applied Nutrition Cream of Rice provides high-quality carbohydrates specifically for mass gain. With 67 servings per container, this clean carb source is perfect for supporting weight gain and muscle building.",
    "price": 70000,
    "image": "https://i.imgur.com/Jaaes7j.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 40,
    "benefits": [
      "Carbohydrates for Mass Gain",
      "67 servings",
      "Clean carb source",
      "Versatile usage"
    ],
    "ingredients": [
      "Premium Rice Powder",
      "Natural Flavors",
      "Digestive Enzymes"
    ],
    "usage": "Mix 1-2 scoops with water, protein shakes, or add to smoothies. Consume as needed for carb intake."
  },
  {
    "id": "56",
    "name": "MT Extreme 2000 – 6lbs",
    "description": "60 grams protein ✅ 2,130 calories ✅ 5g Creatine ✅ 20 Vitamins and Minerals ✅",
    "full_description": "MT Extreme 2000 – 6lbs is an extreme mass gainer delivering 80 grams of protein and 2,350 calories per serving. Enhanced with 5g of creatine and 20 vitamins and minerals for comprehensive nutrition.",
    "price": 110000,
    "image": "https://i.imgur.com/RiJzqQv.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 28,
    "benefits": [
      "80 grams protein",
      "2,350 calories",
      "5g Creatine",
      "20 Vitamins and Minerals"
    ],
    "ingredients": [
      "Multi-Source Protein",
      "Complex Carbohydrates",
      "Creatine Monohydrate",
      "20 Vitamins & Minerals",
      "Digestive Enzymes"
    ],
    "usage": "Mix 3-4 scoops with 20oz of water or milk. Consume 1 serving daily."
  },
  {
    "id": "54",
    "name": "ON Serious Mass 6lb",
    "description": "For weight gain ✅ Known for results ✅",
    "full_description": "ON Serious Mass 6lb is designed specifically for weight gain and is known for delivering consistent results. This proven formula helps athletes and bodybuilders add quality mass effectively.",
    "price": 115000,
    "image": "https://i.imgur.com/vXjskK7.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 45,
    "benefits": [
      "For weight gain",
      "Known for results",
      "Proven formula",
      "Quality mass building"
    ],
    "ingredients": [
      "Protein Blend",
      "Complex Carbohydrates",
      "Creatine",
      "Glutamine",
      "Vitamins",
      "Minerals",
      "Digestive Enzymes"
    ],
    "usage": "Mix 2 scoops with 16oz of cold water or milk. Consume 1-2 servings daily."
  },
  {
    "id": "61",
    "name": "Hyperbolic Mass GH 1KG",
    "description": "All in one Extreme Mass Gainer ✅ 60g Protein ✅ BCAAs ✅ Creatine ✅ Glycine ✅",
    "full_description": "⚠️ Flavors may vary based on availability, and all pictures posted are for reference only. Kindly confirm your preferred flavor (if available) when ordering. SuppHardy delivers quality, always.💪🏾",
    "price": 50000,
    "image": "https://i.imgur.com/0QOB9k5.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 50,
    "benefits": [
      "All in one Extreme Mass Gainer",
      "High Protein with BCAAs, Creatine and Glycine",
      "Compact 2kg size",
      "Complete nutrition"
    ],
    "ingredients": [
      "High-Quality Protein",
      "BCAAs",
      "Creatine Monohydrate",
      "Glycine",
      "Complex Carbs",
      "Essential Fats"
    ],
    "usage": "Mix 1-2 scoops with 12oz of water or milk. Consume 1-2 servings daily."
  },
  {
    "id": "62",
    "name": "ANABOLIC MASS 12lbs 💥",
    "description": "Massive calorie boost ✅ Fast weight gain ✅ 55g high-quality protein ✅ Big calories. Big size. No excuses ✅",
    "full_description": "Provides approximately 1260–1280 calories per serving when mixed with water. Contains a multi-stage carb complex and a protein blend",
    "price": 165000,
    "image": "https://i.imgur.com/Sd8sjoD.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 50,
    "benefits": [
      "Rapid Weight Gain",
      "Muscle Growth & Recovery",
      "Enhanced Performance",
      "Convenience"
    ],
    "ingredients": [
      "Carbohydrates",
      "Protein Blend",
      "Creatine Monohydrate",
      "Sucralose",
      "Essential Fats"
    ],
    "usage": "Add 4 scoops (approx. 334g) of Anabolic Mass Gainer to 17-20oz (500-600ml) of water or milk."
  },
  {
    "id": "105",
    "name": "Applied Nutrition Critical Mass 6kg",
    "description": "100 Scoops! 25 Servings ✅ Helps you gain weight ✅ Massive 6kg ✅ Great for those with fast metabolism ✅",
    "full_description": "Applied Nutrition Critical Mass 6kg is a massive weight gainer perfect for those with fast metabolism. With 100 scoops providing 25 servings, this formula is designed to help you pack on serious mass.",
    "price": 140000,
    "image": "https://i.imgur.com/Pqrq6yD.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 25,
    "benefits": [
      "100 Scoops! 25 Servings",
      "Helps you gain weight",
      "Massive 6kg",
      "Great for those with fast metabolism"
    ],
    "ingredients": [
      "Protein Blend",
      "Complex Carbohydrates",
      "Creatine",
      "Glutamine",
      "Digestive Enzymes",
      "Vitamins",
      "Minerals"
    ],
    "usage": "Mix 4 scoops with 16-20oz of water or milk. Consume 1 serving daily."
  },
  {
    "id": "104",
    "name": "Hyperbolic Mass GH 9lbs",
    "description": "All in one Extreme Mass Gainer ✅ High Protein with BCAAs, Creatine and Glycine ✅",
    "full_description": "Hyperbolic Mass GH 9lbs is an all-in-one extreme mass gainer featuring high protein content with BCAAs, creatine, and glycine for maximum muscle growth and recovery support.",
    "price": 135000,
    "image": "https://i.imgur.com/HSaaoCR.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 25,
    "benefits": [
      "All in one Extreme Mass Gainer",
      "High Protein with BCAAs, Creatine and Glycine",
      "Supports muscle recovery",
      "Enhanced mass building"
    ],
    "ingredients": [
      "Whey Protein",
      "Casein Protein",
      "BCAAs",
      "Creatine Monohydrate",
      "Glycine",
      "Complex Carbohydrates",
      "MCT Oil"
    ],
    "usage": "Mix 1-2 scoops with 12-16oz of water or milk. Consume 1-2 servings daily."
  },
  {
    "id": "58",
    "name": "AN Lean Mass Gainer💥",
    "description": "For Clean Gains ✅ Has Creatine ✅ Has Glutamine✅ 40 scoops ✅",
    "full_description": "AN Lean Mass Gainer  help users build lean muscle mass by providing a balance of macronutrients and performance-enhancing ingredients.",
    "price": 100000,
    "image": "https://i.imgur.com/2iWGR5s.jpeg",
    "category": "Mass Gainers",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 50,
    "benefits": [
      "minimizing excess fat gain",
      "Improved Recovery",
      "Enhanced Performance"
    ],
    "ingredients": [
      "whey protein concentrate (99.9% purity)"
    ],
    "usage": "1–2 servings per day, but always refer to the manufacturer's specific instructions."
  },
  {
    "id": "48",
    "name": "Whole Food Gainer 6lbs",
    "description": "100% Plant Based ✅ No Bloating ❌ Whole Food Sources ✅ Supports Consistent Muscle Growth ✅ Supports Muscle Recovery ✅",
    "full_description": "Whole Food Gainer 6lbs is a 100% plant-based mass gainer that provides clean calories without bloating. Made from whole food sources, it supports consistent muscle growth and recovery for natural athletes.",
    "price": 100000,
    "image": "https://i.imgur.com/Iy8zmlA.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 35,
    "benefits": [
      "100% Plant Based",
      "No Bloating",
      "Whole Food Sources",
      "Supports Consistent Muscle Growth",
      "Supports Muscle Recovery"
    ],
    "ingredients": [
      "Plant Protein Blend",
      "Organic Oats",
      "Quinoa",
      "Brown Rice",
      "Coconut Oil",
      "Natural Flavors",
      "Digestive Enzymes"
    ],
    "usage": "Mix 2 scoops with 12-16oz of water or plant milk. Consume 1-2 servings daily."
  },
  {
    "id": "55",
    "name": "Hyperbolic Mass GH 2KG",
    "description": "All in one Extreme Mass Gainer ✅ High Protein with BCAAs, Creatine and Glycine ✅",
    "full_description": "Hyperbolic Mass GH 2KG is an all-in-one extreme mass gainer in a compact 2kg size. Features high protein content with BCAAs, creatine, and glycine for comprehensive muscle building support.",
    "price": 70000,
    "image": "https://i.imgur.com/ybEQnjj.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 50,
    "benefits": [
      "All in one Extreme Mass Gainer",
      "High Protein with BCAAs, Creatine and Glycine",
      "Compact 2kg size",
      "Complete nutrition"
    ],
    "ingredients": [
      "High-Quality Protein",
      "BCAAs",
      "Creatine Monohydrate",
      "Glycine",
      "Complex Carbs",
      "Essential Fats"
    ],
    "usage": "Mix 1-2 scoops with 12oz of water or milk. Consume 1-2 servings daily."
  },
  {
    "id": "52",
    "name": "Mutant Mass Extreme 6lbs",
    "description": "Available in 4 different Flavors ✅ Big Bag Gainer ✅ For growing bigger and putting on weight ✅ 1,070 calories per serving ✅",
    "full_description": "Mutant Mass Extreme 6lbs is available in 4 different flavors and serves as a big bag gainer for those serious about growing bigger. With 1,070 calories per serving, it's designed for maximum weight gain.",
    "price": 95000,
    "image": "https://i.imgur.com/UGjJnh0.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 35,
    "benefits": [
      "Available in 4 different Flavors",
      "Big Bag Gainer",
      "For growing bigger and putting on weight",
      "1,070 calories per serving"
    ],
    "ingredients": [
      "Protein Matrix",
      "High-Glycemic Carbs",
      "Healthy Fats",
      "Creatine",
      "Waxy Maize",
      "Coconut Oil",
      "Natural Flavors"
    ],
    "usage": "Mix 4 scoops with 16-20oz of cold water or milk. Consume 1-2 servings daily."
  },
  {
    "id": "50",
    "name": "Mutant Mass Extreme 12lbs",
    "description": "Big Bag Gainer, 6kg ✅ For growing bigger and putting on weight ✅ Specifically known for adding mass ✅ 1,070 calories per serving ✅ Available in Vanilla and Chocolate ✅",
    "full_description": "Mutant Mass Extreme 12lbs is a big bag gainer specifically known for adding serious mass. With 1,070 calories per serving, this 6kg formula is designed for those serious about growing bigger and putting on weight.",
    "price": 140000,
    "image": "https://i.imgur.com/xepWhp6.jpeg",
    "category": "Mass Gainers",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 22,
    "benefits": [
      "Big Bag Gainer, 6kg",
      "For growing bigger and putting on weight",
      "Specifically known for adding mass",
      "1,070 calories per serving",
      "Available in Vanilla and Chocolate"
    ],
    "ingredients": [
      "Protein Matrix",
      "High-Glycemic Carbs",
      "Healthy Fats",
      "Creatine",
      "Waxy Maize",
      "Coconut Oil",
      "Flax Oil"
    ],
    "usage": "Mix 4 scoops with 16-20oz of cold water or milk. Consume 1-2 servings daily."
  },
  {
    "id": "101",
    "name": "Applied Nutrition All Black Everything",
    "description": "Ultimate Preworkout 💥 30 servings ✅",
    "full_description": "Applied Nutrition All Black Everything is the ultimate pre-workout formula with 30 servings of high-potency ingredients to deliver extreme energy, focus, pumps, and performance enhancement.",
    "price": 50000,
    "image": "https://i.imgur.com/LyPqFm0.jpeg",
    "category": "Pre-Workout",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 40,
    "benefits": [
      "Ultimate Preworkout",
      "30 servings",
      "Extreme energy",
      "Enhanced focus"
    ],
    "ingredients": [
      "Caffeine Anhydrous",
      "Beta-Alanine",
      "L-Citrulline Malate",
      "Creatine HCL",
      "Taurine",
      "Tyrosine"
    ],
    "usage": "Mix 1 scoop with 8oz of water and consume 20-30 minutes before training."
  },
  {
    "id": "46",
    "name": "C4 Ripped Preworkout",
    "description": "30 servings ✅ Explosive drive ✅ Cutting formula ✅ Dietary supplement",
    "full_description": "⚠️ Flavors may vary based on availability, and all pictures posted are for reference only. Kindly confirm your preferred flavor (if available) when ordering. SuppHardy delivers quality, always.💪🏾",
    "price": 55000,
    "image": "https://i.imgur.com/iBi1HPZ.jpeg",
    "category": "Pre-Workout",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 80,
    "benefits": [
      "The Original Explosive Pre workout",
      "Increases Energy",
      "Improves Performance",
      "30 full servings",
      "Metabolism"
    ],
    "ingredients": [
      "Beta-Alanine",
      "Creatine Nitrate",
      "Arginine AKG",
      "N-Acetyl-L-Tyrosine",
      "Caffeine Anhydrous",
      "Bitter Orange Extract"
    ],
    "usage": "Take each of C4® Ripped Sport, with 8 fl. oz. Consume 20 - 30 minutes before training"
  },
  {
    "id": "45",
    "name": "C4 Original 30 Servings",
    "description": "The Original Explosive Pre workout ✅ Increases Energy ✅ Improves Performance ✅",
    "full_description": "⚠️ Flavors may vary based on availability, and all pictures posted are for reference only. Kindly confirm your preferred flavor (if available) when ordering. SuppHardy delivers quality, always.💪🏾",
    "price": 45000,
    "image": "https://i.imgur.com/KI0YAAs.jpeg",
    "category": "Pre-Workout",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 80,
    "benefits": [
      "The Original Explosive Pre workout",
      "Increases Energy",
      "Improves Performance",
      "30 full servings"
    ],
    "ingredients": [
      "Beta-Alanine",
      "Creatine Nitrate",
      "Arginine AKG",
      "N-Acetyl-L-Tyrosine",
      "Caffeine Anhydrous",
      "Bitter Orange Extract"
    ],
    "usage": "Mix one level scoop of C4 Original powder with approximately 150-200ml  of water. Consume 20-30 minutes before training."
  },
  {
    "id": "47",
    "name": "ON Gold Standard Pre-Workout💥",
    "description": "3.3g Creatine ✅ Performance ✅ Energy ✅ Endurance ✅ Focus ✅",
    "full_description": "⚠️ Flavors may vary based on availability, and all pictures posted are for reference only. Kindly confirm your preferred flavor (if available) when ordering. SuppHardy delivers quality, always.💪🏾",
    "price": 50000,
    "image": "https://i.imgur.com/lAzRG1z.jpeg",
    "category": "Pre-Workout",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 80,
    "benefits": [
      "Energy & Focus",
      "Power & Performance",
      "Endurance"
    ],
    "ingredients": [
      "Caffeine",
      "Creatine Monohydrate",
      "Beta-Alanine",
      "L-Citrulline & N-Acetyl-L-Tyrosine",
      "B Vitamins"
    ],
    "usage": "Mix 1 scoop with 6-8 oz of cold water. Drink 15-30 minutes before your workout. Use consistently with a balanced diet and exercise."
  },
  {
    "id": "100",
    "name": "Redcon 1 Total War Preworkout",
    "description": "Rapid & Fast acting energy ✅ Mental Focus ✅ Endurance ✅ Sustained Energy ✅",
    "full_description": "Redcon 1 Total War is an all-out pre-workout supplement designed for those seeking rapid, fast-acting energy, mental focus, endurance, and sustained energy throughout even the most demanding workouts.",
    "price": 50000,
    "image": "https://i.imgur.com/9mLu3CI.jpeg",
    "category": "Pre-Workout",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 55,
    "benefits": [
      "Rapid & Fast acting energy",
      "Mental Focus",
      "Endurance",
      "Sustained Energy"
    ],
    "ingredients": [
      "Caffeine Anhydrous",
      "Beta-Alanine",
      "L-Citrulline Malate",
      "Agmatine Sulfate",
      "Taurine",
      "Di-Caffeine Malate"
    ],
    "usage": "Mix 1 scoop with 8-10oz of water and consume 20-30 minutes before training."
  },
  {
    "id": "102",
    "name": "C4 Original 50 Servings",
    "description": "The Original Explosive Pre workout ✅ Increases Energy ✅ Improves Performance ✅",
    "full_description": "C4 Original is a compact pre-workout tub with 50 servings—ideal for trying the formula or travel. This explosive blend increases energy and improves performance; larger tub sizes are also available separately.",
    "price": 65000,
    "image": "https://i.imgur.com/p9xvoJJ.jpeg",
    "category": "Pre-Workout",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 80,
    "benefits": [
      "The Original Explosive Pre workout",
      "Increases Energy",
      "Improves Performance",
      "5 trial-size servings"
    ],
    "ingredients": [
      "Beta-Alanine",
      "Creatine Nitrate",
      "Arginine AKG",
      "N-Acetyl-L-Tyrosine",
      "Caffeine Anhydrous",
      "Bitter Orange Extract"
    ],
    "usage": "Mix 1 scoop with 6oz of water and consume 20-30 minutes before training."
  },
  {
    "id": "43",
    "name": "Applied diet whey protein",
    "description": "Whey Isolate and Concentrate Duo 💥 4lbs ✅ 40 Servings ✅",
    "full_description": "Advanced weight management • Includes CLA for fat loss • Low Carbs and Sugars",
    "price": 85000,
    "image": "https://i.imgur.com/GFCWWpN.jpeg",
    "category": "Weight Loss",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 1,
    "benefits": [
      "Advanced weight management",
      "Includes CLA for fat loss",
      "Low Carbs and Sugars",
      "40 Servings"
    ],
    "ingredients": [
      "Whey Protein Isolate",
      "Whey Protein Concentrate",
      "CLA",
      "Green Tea Extract",
      "L-Carnitine"
    ],
    "usage": "Mix 1 scoop with 6-8oz of cold water or milk. Consume 1-2 servings daily."
  },
  {
    "id": "39",
    "name": "The Ripper Fat Burner",
    "description": "Burns fat ✅ Mood enhancer ✅ Increases focus ✅",
    "full_description": "The Ripper is an extreme fat burning supplement that combines potent thermogenics with mood enhancers and focus-boosting ingredients to help torch fat while providing smooth, consistent energy and mental clarity.",
    "price": 50000,
    "image": "https://i.imgur.com/nJchGTk.jpeg",
    "category": "Weight Loss",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 30,
    "benefits": [
      "Burns fat",
      "Mood enhancer",
      "Increases focus",
      "All-day energy"
    ],
    "ingredients": [
      "Raspberry Ketones",
      "Caffeine Anhydrous",
      "Green Coffee Extract",
      "Taurine",
      "Acetyl-L-Carnitine",
      "Olive Leaf Extract"
    ],
    "usage": "Mix 1 scoop with 6-8oz of cold water and consume on an empty stomach 15-30 minutes before breakfast. For enhanced results, take an additional serving 5-6 hours later."
  },
  {
    "id": "64",
    "name": "Diet Feul Ultralean Shake 💥",
    "description": "For Weight Loss ✅ Suitable for Vegans ✅",
    "full_description": "Diet Fuel Ultralean Shake is a comprehensive weight loss shake designed for those serious about shedding fat. This vegan-friendly formula provides clean nutrition while supporting your weight loss goals.",
    "price": 70000,
    "image": "https://i.imgur.com/D5VNkN6.jpeg",
    "category": "Weight Loss",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 30,
    "benefits": [
      "For Weight Loss",
      "Suitable for Vegans",
      "Meal replacement option",
      "Clean nutrition"
    ],
    "ingredients": [
      "Plant Protein Blend",
      "Fiber Complex",
      "Green Tea Extract",
      "CLA",
      "L-Carnitine",
      "Natural Flavors"
    ],
    "usage": "Mix 1-2 scoops with 8-10oz of water or plant milk. Use as a meal replacement or between meals."
  },
  {
    "id": "65",
    "name": "CLA Pure 1000 💥",
    "description": "Reduces Abdominal Fat ✅ Fat Loss & Weight Management ✅ Muscle Growth & Retention ✅ Improved Metabolic Health ✅ Supports Heart Health ✅ Anti-Inflammatory & Immune Support ✅ Potential Cancer-Fighting Properties ✅",
    "full_description": "CLA Pure 1000 provides pure Conjugated Linoleic Acid to reduce abdominal fat and support weight management. This powerful supplement promotes muscle growth and retention while improving metabolic health, supporting heart health, and providing anti-inflammatory benefits.",
    "price": 65000,
    "image": "https://i.imgur.com/rOkVbx7.jpeg",
    "category": "Weight Loss",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 50,
    "benefits": [
      "Reduces Abdominal Fat",
      "Fat Loss & Weight Management",
      "Muscle Growth & Retention",
      "Improved Metabolic Health",
      "Supports Heart Health",
      "Anti-Inflammatory & Immune Support",
      "Potential Cancer-Fighting Properties"
    ],
    "ingredients": [
      "Conjugated Linoleic Acid (CLA) 1000mg",
      "Gelatin Capsule",
      "Glycerin"
    ],
    "usage": "Take 2-3 capsules daily with meals. Do not exceed 6 capsules in 24 hours."
  },
  {
    "id": "66",
    "name": "Animal Advanced Cuts 💥",
    "description": "Boosts Metabolism ✅ Helps Curb Appetite ✅ Nootropic Boost to Promote Concentration & Mental Clarity ✅ Supports Healthy Stress Response and Upbeat Mood ✅ Enhanced Bioavailability ✅ Reduces Water Retention and Bloating ✅",
    "full_description": "Animal Advanced Cuts is a comprehensive cutting supplement that boosts metabolism and helps curb appetite. Features nootropic benefits for concentration and mental clarity, supports healthy stress response and mood, with enhanced bioavailability and reduced water retention.",
    "price": 85500,
    "image": "https://i.imgur.com/yVns5A8.jpeg",
    "category": "Weight Loss",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 25,
    "benefits": [
      "Boosts Metabolism",
      "Helps Curb Appetite",
      "Nootropic Boost to Promote Concentration & Mental Clarity",
      "Supports Healthy Stress Response and Upbeat Mood",
      "Enhanced Bioavailability",
      "Reduces Water Retention and Bloating"
    ],
    "ingredients": [
      "Thermogenic Complex",
      "Appetite Control Blend",
      "Nootropic Complex",
      "Diuretic Complex",
      "Bioavailability Enhancers"
    ],
    "usage": "Take 1 pack daily with breakfast. Do not exceed 1 pack in 24 hours."
  },
  {
    "id": "106",
    "name": "Applied Nutrition Diet Protein",
    "description": "72 servings ✅ High protein ✅ Lean shake ✅ Strawberry Weight management ✅ Fat loss support",
    "full_description": "Applied Nutrition Diet Protein supports weight management with a high-protein lean shake while helping you preserve muscle during fat loss, recovery, and everyday training.",
    "price": 130000,
    "image": "https://i.imgur.com/SpfTuZH.jpeg",
    "category": "Weight Loss",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 40,
    "benefits": [
      "Protein supply",
      "Weight management",
      "Supports athletes",
      "muscle maintenance and recovery"
    ],
    "ingredients": [
      "Whey Protein Blend",
      "Acetyl L-Carnitine",
      "Strawberry flavour",
      "Protein"
    ],
    "usage": "Mix 1 scoop with 150–300 ml of cold water and shake well."
  },
  {
    "id": "37",
    "name": "Shred-X Ultimate Fat Burner",
    "description": "Lose weight ✅ Burn fat ✅ Reduces tiredness and fatigue ✅ Promotes Mental Focus ✅",
    "full_description": "Shred-X Ultimate Fat Burner is a comprehensive weight management supplement designed to help you lose weight, burn fat, reduce tiredness and fatigue, and promote mental focus during calorie-restricted diets.",
    "price": 65000,
    "image": "https://i.imgur.com/7VYdcsh.jpeg",
    "category": "Weight Loss",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 35,
    "benefits": [
      "Lose weight",
      "Burn fat",
      "Reduces tiredness and fatigue",
      "Promotes Mental Focus"
    ],
    "ingredients": [
      "Green Tea Extract",
      "Caffeine Anhydrous",
      "L-Carnitine",
      "Cayenne Pepper Extract",
      "Garcinia Cambogia",
      "Chromium Picolinate"
    ],
    "usage": "Take 2 capsules twice daily, 30 minutes before meals. Do not exceed 4 capsules in 24 hours."
  },
  {
    "id": "80",
    "name": "AN Casein Protein",
    "description": "60 Servings ✅ Time release Protein ✅ Grow and maintain Muscle Mass ✅ 4.3G Glutamine ✅ Added Digestive Enzyme Blend",
    "full_description": "⚠️ Flavors may vary based on availability, and all pictures posted are for reference only. Kindly confirm your preferred flavor (if available) when ordering. SuppHardy delivers quality, always.💪🏾",
    "price": 120000,
    "image": "https://i.imgur.com/vxodvYf.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 35,
    "benefits": [
      "Sustained Amino Acid Release",
      "Muscle Growth and Recovery",
      "Increased Satiety",
      "Nutrient-Rich",
      "Low Calorie/Carb/Fat",
      "Tested for Athletes"
    ],
    "ingredients": [
      "Micellar Casein",
      "Digestive aids",
      "Natural Flavors",
      "Thickener",
      "Sweeteners"
    ],
    "usage": " Mix 2 scoops (30g) with 300-500 ml of water or milk in a shaker bottle. The less liquid used, the thicker the shake will be."
  },
  {
    "id": "14",
    "name": "ISO-XP Whey Isolate",
    "description": "72 servings ✅ Less than one gram of carbs per serving ✅ Low sugar, Low fat shake ✅ 90% protein content ✅",
    "full_description": "ISO-XP Whey Isolate provides 72 servings of premium isolate with less than one gram of carbs per serving. With 90% protein content, this low sugar, low fat formula is perfect for those seeking maximum protein with minimal calories.",
    "price": 155000,
    "image": "https://i.imgur.com/NVryXrW.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 35,
    "benefits": [
      "72 servings",
      "Less than one gram of carbs per serving",
      "Low sugar, Low fat shake",
      "90% protein content"
    ],
    "ingredients": [
      "Whey Protein Isolate",
      "Digestive Enzymes",
      "Natural Flavors"
    ],
    "usage": "Mix 1 scoop with 6-8oz of cold water. Consume 1-2 servings daily."
  },
  {
    "id": "1",
    "name": "Muscle Tech Whey Protein 4lbs",
    "description": "3g Creatine ✅ 40 servings ✅ 6.6g BCAAs ✅",
    "full_description": "Premium whey protein with added creatine for maximum muscle recovery and growth. Each serving provides 3g of creatine and 6.6g of BCAAs to support muscle building and recovery.",
    "price": 130000,
    "image": "https://i.imgur.com/LKc9jvX.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 45,
    "benefits": [
      "3g Creatine per serving",
      "40 servings per container",
      "6.6g BCAAs per serving",
      "Supports muscle growth"
    ],
    "ingredients": [
      "Whey Protein Isolate",
      "Whey Protein Concentrate",
      "Creatine Monohydrate",
      "BCAAs",
      "Digestive Enzymes"
    ],
    "usage": "Mix 1 scoop with 8-10oz of cold water or milk. Consume 1-3 servings daily, including post-workout."
  },
  {
    "id": "75",
    "name": "Muscletech Nitro Tech (NT 100% Whey Gold 5lbs)",
    "description": "70 servings ✅ Ultra pure whey formula ✅ 5.4g BCAAs ✅ 4g Glutamine & Precursor ✅",
    "full_description": "Muscletech Nitro Tech NT 100% Whey Gold 5lbs delivers 70 servings of ultra-pure whey formula with 5.4g BCAAs and 4g Glutamine & Precursor per serving for maximum muscle recovery and growth.",
    "price": 180000,
    "image": "https://i.imgur.com/T2JLzU7.jpeg",
    "category": "Whey Protein",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 30,
    "benefits": [
      "70 servings",
      "Ultra pure whey formula",
      "5.4g BCAAs",
      "4g Glutamine & Precursor"
    ],
    "ingredients": [
      "Ultra Pure Whey Protein",
      "Whey Protein Isolate",
      "Whey Protein Peptides",
      "Glutamine",
      "BCAAs"
    ],
    "usage": "Mix 1 scoop with 6-8oz of cold water or milk. Consume 1-3 servings daily."
  },
  {
    "id": "12",
    "name": "Dymatize Hydrolized Isolate",
    "description": "42 servings ✅ Ultra fast absorbing protein ✅",
    "full_description": "Dymatize Hydrolyzed Isolate features 42 servings of ultra-fast absorbing hydrolyzed whey protein isolate for rapid delivery of amino acids to muscles after training. Ideal for serious athletes seeking optimal recovery.",
    "price": 165000,
    "image": "https://i.imgur.com/y2FA2rk.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 28,
    "benefits": [
      "42 servings",
      "Ultra fast absorbing protein",
      "Rapid recovery",
      "Superior digestion"
    ],
    "ingredients": [
      "Hydrolyzed Whey Protein Isolate",
      "Whey Protein Isolate",
      "Digestive Enzymes"
    ],
    "usage": "Mix 1 scoop with 6-8oz of cold water or milk. Consume within 30 minutes after training."
  },
  {
    "id": "9",
    "name": "Gold Standard 100% Isolate",
    "description": "76 servings ✅ Ultra filtered for exceptional Purity ✅ Enhances Strength training and sports performance ✅",
    "full_description": "Gold Standard 100% Isolate features ultra-filtered whey protein isolate for exceptional purity. With 76 servings per container, this premium formula enhances strength training and sports performance.",
    "price": 212000,
    "image": "https://i.imgur.com/l09oWX8.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 9,
    "benefits": [
      "76 servings",
      "Ultra filtered for exceptional Purity",
      "Enhances Strength training and sports performance",
      "Maximum protein bioavailability"
    ],
    "ingredients": [
      "Whey Protein Isolate",
      "Hydrolyzed Whey Protein Isolate",
      "Natural Flavors"
    ],
    "usage": "Mix 1 scoop with 6-8oz of cold water or milk. Consume 1-2 servings daily."
  },
  {
    "id": "13",
    "name": "Critical Whey Advanced Protein",
    "description": "67 servings ✅ Build muscle ✅ High BCAAs ✅ Halal certified ✅",
    "full_description": "Critical Whey Advanced Protein delivers 67 servings of premium protein with high BCAA content for optimal muscle building. Halal certified and formulated for serious athletes seeking quality results.",
    "price": 130000,
    "image": "https://i.imgur.com/RKN7FI4.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 45,
    "benefits": [
      "67 servings",
      "Build muscle",
      "High BCAAs",
      "Halal certified"
    ],
    "ingredients": [
      "Whey Protein Concentrate",
      "Whey Protein Isolate",
      "BCAAs",
      "Digestive Enzymes"
    ],
    "usage": "Mix 1 scoop with 8oz of cold water or milk. Consume 1-3 servings daily."
  },
  {
    "id": "6",
    "name": "Gold Standard Whey 5lbs",
    "description": "68 servings • The No 1 Premium Whey • 11 grams Essential Amino Acids",
    "full_description": "Gold Standard 100% Whey is the world's best-selling whey protein powder. With 68 servings per container and 11 grams of essential amino acids per serving, this premium formula has set the benchmark for protein supplements.",
    "price": 205000,
    "image": "https://i.imgur.com/6lfnYCg.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": true,
    "is_out_of_stock": false,
    "inventory": 75,
    "benefits": [
      "68 servings",
      "The No 1 Premium Whey",
      "11 grams Essential Amino Acids",
      "Gold standard in protein"
    ],
    "ingredients": [
      "Whey Protein Isolate",
      "Whey Protein Concentrate",
      "Whey Peptides",
      "Essential Amino Acids"
    ],
    "usage": "Mix 1 scoop with 6-8oz of cold water or milk. Consume 1-3 servings daily."
  },
  {
    "id": "76",
    "name": "AN Plant Protein",
    "description": "Low Fat ✅ Low Sugar ✅ 60 servings ✅ No Bloating ✅ Super Amino Acid Profile ✅",
    "full_description": "AN Plant Protein delivers 60 servings of premium plant-based protein with low fat and low sugar content. Features a super amino acid profile with no bloating, perfect for those seeking clean plant nutrition.",
    "price": 120000,
    "image": "https://i.imgur.com/WxYQYqp.jpeg",
    "category": "Whey Protein",
    "is_new": true,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 40,
    "benefits": [
      "Low Fat",
      "Low Sugar",
      "60 servings",
      "No Bloating",
      "Super Amino Acid Profile"
    ],
    "ingredients": [
      "Plant Protein Blend",
      "Pea Protein",
      "Rice Protein",
      "Hemp Protein",
      "Natural Flavors",
      "Digestive Enzymes"
    ],
    "usage": "Mix 1-2 scoops with 8-10oz of water or plant milk. Consume 1-2 servings daily."
  },
  {
    "id": "81",
    "name": "USN Trust 50grams Protein 💥",
    "description": " A bottle ✅ 50 grams Protein a bottle ✅ No added Sugar ✅ Lactose Free ✅ Low Carb ✅ Lactose Free ✅ Supports Lean Muscle Mass",
    "full_description": "⚠️ Flavors may vary based on availability, and all pictures posted are for reference only. Kindly confirm your preferred flavor (if available) when ordering. SuppHardy delivers quality, always.💪🏾",
    "price": 13000,
    "image": "https://i.imgur.com/MxDlGf2.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 35,
    "benefits": [
      "High Protein Content",
      "Satiety and Cravings",
      "Lactose-Free",
      "Low in Fat and No Added Sugar"
    ],
    "ingredients": [
      "Skimmed milk",
      "Milk protein concentrate",
      "Flavoring",
      "Enzyme",
      "Sweeteners"
    ],
    "usage": "Shake well before use and enjoy any time of day, on the go. It is best served chilled."
  },
  {
    "id": "82",
    "name": "AN Beef XP 💥",
    "description": "60 servings ✅ 100% Hydrolyzed beef protein ✅ Lactose Free ✅ Dairy Free ✅ Halal Certified ✅",
    "full_description": "⚠️ Flavors may vary based on availability, and all pictures posted are for reference only. Kindly confirm your preferred flavor (if available) when ordering. SuppHardy delivers quality, always. 💪🏾",
    "price": 130000,
    "image": "https://i.imgur.com/zqcLgBg.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 35,
    "benefits": [
      "Muscle Growth and Recovery",
      "Fast Absorption",
      "Dietary Friendly",
      "Lean Formula",
      "Versatile and Tasty"
    ],
    "ingredients": [
      "Acid",
      "Thickener",
      "Flavoring",
      "Colors",
      "Sweeteners"
    ],
    "usage": "Mix one scoop (30g) of Beef-XP powder with approximately 300ml of water or milk in a shaker bottle"
  },
  {
    "id": "8",
    "name": "Gold Standard Whey 2lbs",
    "description": "28 servings • 5.5 BCAAs",
    "full_description": "Gold Standard 100% Whey (2lbs) delivers 28 servings of premium protein with 5.5g of naturally occurring BCAAs per serving for optimal muscle recovery and growth.",
    "price": 90000,
    "image": "https://i.imgur.com/7sosuVt.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 25,
    "benefits": [
      "28 servings",
      "5.5g BCAAs per serving",
      "Premium quality",
      "Easy mixing"
    ],
    "ingredients": [
      "Whey Protein Isolate",
      "Whey Protein Concentrate",
      "Whey Peptides",
      "Digestive Enzymes"
    ],
    "usage": "Mix 1 scoop with 6-8oz of cold water or milk. Consume 1-3 servings daily."
  },
  {
    "id": "4",
    "name": "Muscletech Iso Whey",
    "description": "100% Whey Protein Isolate • 75 servings • 0 added sugar • For lean gains",
    "full_description": "Muscletech Iso Whey delivers pure 100% whey protein isolate with no added sugar. With 75 servings per container, this premium formula is ideal for athletes looking to build lean muscle while maintaining a clean diet.",
    "price": 160000,
    "image": "https://i.imgur.com/AJoFxB6.jpeg",
    "category": "Whey Protein",
    "is_new": false,
    "is_popular": false,
    "is_out_of_stock": false,
    "inventory": 40,
    "benefits": [
      "100% Whey Protein Isolate",
      "75 servings",
      "0 added sugar",
      "For lean gains"
    ],
    "ingredients": [
      "100% Whey Protein Isolate",
      "Natural Flavors",
      "0 Added Sugar"
    ],
    "usage": "Mix 1 scoop with 8oz of cold water or milk. Consume within 30 minutes after training."
  }
];
