'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function RumbaPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic Movements (Closed, Open, In Place, Alternative)", href: "/latin/rumba/basic_movements", category: "bronze", isRestricted: true },
    { name: "Cucarachas", href: "/latin/rumba/cucarachas", category: "bronze", isRestricted: true },
    { name: "New York", href: "/latin/rumba/new_york", category: "bronze", isRestricted: true },
    { name: "Spot Turns (including Switch and Underarm Turns)", href: "/latin/rumba/spot_turns", category: "bronze", isRestricted: true },
    { name: "Shoulder to Shoulder", href: "/latin/rumba/shoulder_to_shoulder", category: "bronze", isRestricted: true },
    { name: "Hand to Hand", href: "/latin/rumba/hand_to_hand", category: "bronze", isRestricted: true },
    { name: "Progressive Walks Forward or Back", href: "/latin/rumba/progressive_walks", category: "bronze", isRestricted: true },
    { name: "Side Steps", href: "/latin/rumba/side_steps", category: "bronze", isRestricted: true },
    { name: "Cuban Rocks", href: "/latin/rumba/cuban_rocks", category: "bronze", isRestricted: true },
    { name: "Fan", href: "/latin/rumba/fan", category: "bronze", isRestricted: true },
    { name: "Alemana", href: "/latin/rumba/alemana", category: "bronze", isRestricted: true },
    { name: "Hockey Stick", href: "/latin/rumba/hockey_stick", category: "bronze", isRestricted: true },
    { name: "Natural Top", href: "/latin/rumba/natural_top", category: "bronze", isRestricted: true },
    { name: "Opening Out to Right and Left", href: "/latin/rumba/opening_out_to_right_and_left", category: "bronze", isRestricted: true },
    { name: "Natural Opening Out Movement", href: "/latin/rumba/natural_opening_out_movement", category: "bronze", isRestricted: true },
    { name: "Closed Hip Twist", href: "/latin/rumba/closed_hip_twist", category: "bronze", isRestricted: true },
    { name: "Open Hip Twist", href: "/latin/rumba/open_hip_twist", category: "silver", isRestricted: true },
    { name: "Reverse Top", href: "/latin/rumba/reverse_top", category: "silver", isRestricted: true },
    { name: "Opening Out from Reverse Top", href: "/latin/rumba/opening_out_from_reverse_top", category: "silver", isRestricted: true },
    { name: "Aida", href: "/latin/rumba/aida", category: "silver", isRestricted: true },
    { name: "Spiral", href: "/latin/rumba/spiral", category: "silver", isRestricted: true },
    { name: "Curl", href: "/latin/rumba/curl", category: "silver", isRestricted: true },
    { name: "Rope Spinning", href: "/latin/rumba/rope_spinning", category: "silver", isRestricted: true },
    { name: "Sliding Doors", href: "/latin/rumba/sliding_doors", category: "gold", isRestricted: true },
    { name: "Fencing", href: "/latin/rumba/fencing", category: "gold", isRestricted: true },
    { name: "Three Threes", href: "/latin/rumba/three_threes", category: "gold", isRestricted: true },
    { name: "Three Alemanas", href: "/latin/rumba/three_alemanas", category: "gold", isRestricted: true },
    { name: "Hip Twists (Advanced, Continuous, Circular)", href: "/latin/rumba/hip_twists", category: "gold", isRestricted: true },
  ];

  let visibleSteps: any = []
  
  if (category === 'all') {
    visibleSteps = steps.filter((step) => step.name.toLowerCase().includes(query.toLowerCase()))
  }
  else if (category === 'restricted') {
    visibleSteps = steps.filter((step) => step.isRestricted && step.name.toLowerCase().includes(query.toLowerCase()))
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