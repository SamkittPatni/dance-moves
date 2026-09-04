'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function ChaChaPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic Movements", href: "/latin/chacha/basic_movements", category: "prebronze", isRestricted: true },
    { name: "New York", href: "/latin/chacha/new_york", category: "prebronze", isRestricted: true },
    { name: "Spot Turns", href:"/latin/chacha/spot_turn", category:"prebronze", isRestricted: true },
    { name: "Shoulder to Shoulder", href: "/latin/chacha/shoulder_to_shoulder", category: "prebronze", isRestricted: true },
    { name: "Hand to Hand", href: "/latin/chacha/hand_to_hand", category:"prebronze", isRestricted: true },
    { name: "Three Cha Cha Chas", href: "/latin/chacha/three_cha_cha_cha", category:"prebronze", isRestricted: true },
    { name: "Side Step", href: "/latin/chacha/side_step", category:"prebronze", isRestricted: true },
    { name: "There and Back", href: "/latin/chacha/there_and_back", category:"prebronze", isRestricted: true },
    { name: "Time Steps", href: "/latin/chacha/time_steps", category:"prebronze", isRestricted: true },
    { name: "Fan", href: "/latin/chacha/fan", category:"bronze", isRestricted: true },
    { name: "Alemana", href: "/latin/chacha/alemana", category:"bronze", isRestricted: true },
    { name: "Hockey Stick", href: "/latin/chacha/hockey_stick", category:"bronze", isRestricted: true },
    { name: "Natural Top", href: "/latin/chacha/natural_top", category:"bronze", isRestricted: true },
    { name: "Natural Opening Out Movement", href: "/latin/chacha/natural_opening_out_movement", category:"bronze", isRestricted: true },
    { name: "Closed Hip Twist", href: "/latin/chacha/closed_hip_twist", category:"bronze", isRestricted: true },
    { name: "Open Hip Twist", href: "/latin/chacha/open_hip_twist", category:"silver", isRestricted: true },
    { name: "Reverse Top", href: "/latin/chacha/reverse_top", category:"silver", isRestricted: true },
    { name: "Opening Out from Reverse Top", href: "/latin/chacha/opening_out_from_reverse_top", category:"silver", isRestricted: true },
    { name: "Aida", href: "/latin/chacha/aida", category:"silver", isRestricted: true },
    { name: "Spiral", href: "/latin/chacha/spiral", category:"silver", isRestricted: true },
    { name: "Curl", href: "/latin/chacha/curl", category:"silver", isRestricted: true },
    { name: "Rope Spinning", href: "/latin/chacha/rope_spinning", category:"silver", isRestricted: true },
    { name: "Cross Basic", href: "/latin/chacha/cross_basic", category:"silver", isRestricted: true },
    { name: "Cuban Breaks", href: "/latin/chacha/cuban_breaks", category:"silver", isRestricted: true },
    { name: "Chase", href: "/latin/chacha/chase", category:"silver", isRestricted: true },
    { name: "Advanced Hip Twist", href: "/latin/chacha/advanced_hip_twist", category:"gold", isRestricted: true },
    { name: "Hip Twist Spiral", href: "/latin/chacha/hip_twist_spiral", category:"gold", isRestricted: true },
    { name: "Turkish Towel", href: "/latin/chacha/turkish_towel", category:"gold", isRestricted: true },
    { name: "Sweetheart", href: "/latin/chacha/sweetheart", category:"gold", isRestricted: true },
    { name: "Follow My Leader", href: "/latin/chacha/follow_my_leader", category:"gold", isRestricted: true },
    { name: "Foot Changes", href: "/latin/chacha/foot_changes", category:"gold", isRestricted: true },
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
    <div className="font-serif font-bold text-center md:text-8xl text-6xl mb-4 text-neutral-300">Cha-Cha</div>
    <div className= "flex flex-row w-full h-full gap-4 py-2 pb-8">
      <SearchBar query={ query } onChangeQuery={ setQuery }/>
      <Filter category={ category } onCategoryChange={ setCategory } />
    </div>
    <LinkBar links={ visibleSteps }/>
  </>
  );

}