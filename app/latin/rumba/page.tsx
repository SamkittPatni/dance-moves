'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function RumbaPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic Movements (Closed, Open, In Place, Alternative)", href: "/latin/rumba/basic_movements", category: "bronze" },
    { name: "Cucarachas", href: "/latin/rumba/cucarachas", category: "bronze" },
    { name: "New York", href: "/latin/rumba/new_york", category: "bronze" },
    { name: "Spot Turns (including Switch and Underarm Turns)", href: "/latin/rumba/spot_turns", category: "bronze" },
    { name: "Shoulder to Shoulder", href: "/latin/rumba/shoulder_to_shoulder", category: "bronze" },
    { name: "Hand to Hand", href: "/latin/rumba/hand_to_hand", category: "bronze" },
    { name: "Progressive Walks Forward or Back", href: "/latin/rumba/progressive_walks", category: "bronze" },
    { name: "Side Steps", href: "/latin/rumba/side_steps", category: "bronze" },
    { name: "Cuban Rocks", href: "/latin/rumba/cuban_rocks", category: "bronze" },
    { name: "Fan", href: "/latin/rumba/fan", category: "bronze" },
    { name: "Alemana", href: "/latin/rumba/alemana", category: "bronze" },
    { name: "Hockey Stick", href: "/latin/rumba/hockey_stick", category: "bronze" },
    { name: "Natural Top", href: "/latin/rumba/natural_top", category: "bronze" },
    { name: "Opening Out to Right and Left", href: "/latin/rumba/opening_out_to_right_and_left", category: "bronze" },
    { name: "Natural Opening Out Movement", href: "/latin/rumba/natural_opening_out_movement", category: "bronze" },
    { name: "Closed Hip Twist", href: "/latin/rumba/closed Hip Twist", category: "bronze" },
    { name: "Open Hip Twist", href: "/latin/rumba/open Hip Twist", category: "silver" },
    { name: "Reverse Top", href: "/latin/rumba/reverse_top", category: "silver" },
    { name: "Opening Out from Reverse Top", href: "/latin/rumba/opening_out_from_reverse_top", category: "silver" },
    { name: "Aida", href: "/latin/rumba/aida", category: "silver" },
    { name: "Spiral", href: "/latin/rumba/spiral", category: "silver" },
    { name: "Curl", href: "/latin/rumba/curl", category: "silver" },
    { name: "Rope Spinning", href: "/latin/rumba/rope_spinning", category: "silver" },
    { name: "Sliding Doors", href: "/latin/rumba/sliding_doors", category: "gold" },
    { name: "Fencing", href: "/latin/rumba/fencing", category: "gold" },
    { name: "Three Threes", href: "/latin/rumba/three_threes", category: "gold" },
    { name: "Three Alemanas", href: "/latin/rumba/three_alemanas", category: "gold" },
    { name: "Hip Twists (Advanced, Continuous, Circular)", href: "/latin/rumba/hip_twists", category: "gold" }
  ];

  let visibleSteps: any = []
  
  if (category === 'all') {
    visibleSteps = steps.filter((step) => step.name.toLowerCase().includes(query.toLowerCase()))
  }
  else {
    visibleSteps = steps.filter((step) => step.category === category && step.name.toLowerCase().includes(query.toLowerCase()))
  }

  return (
  <>
    <SearchBar query={ query } onChangeQuery={ setQuery }/>
    <Filter category={ category } onCategoryChange={ setCategory } />
    <LinkBar links={ visibleSteps }/>
  </>
  );

}