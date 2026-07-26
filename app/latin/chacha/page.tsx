'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function ChaChaPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic Movements", href: "/latin/chacha/basic_movements", category: "bronze", isRestricted: true },
    { name: "New York", href: "/latin/chacha/new_york", category: "bronze", isRestricted: true },
    { name: "Spot Turns", href:"/latin/chacha/spot_turn", category:"bronze", isRestricted: true },
    { name: "Shoulder to Shoulder", href: "/latin/chacha/shoulder_to_shoulder", category: "bronze", isRestricted: true },
    { name: "Hand to Hand", href: "/latin/chacha/hand_to_hand", category:"bronze", isRestricted: true },
    { name: "Three Cha Cha Chas", href: "/latin/chacha/three_cha_cha_cha", category:"bronze", isRestricted: true },
    { name: "Side Step", href: "/latin/chacha/side_step", category:"bronze", isRestricted: true },
    { name: "There and Back", href: "/latin/chacha/there_and_back", category:"bronze", isRestricted: true },
    { name: "Time Steps", href: "/latin/chacha/time_steps", category:"bronze", isRestricted: true },
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
    <SearchBar query={ query } onChangeQuery={ setQuery }/>
    <Filter category={ category } onCategoryChange={ setCategory } />
    <LinkBar links={ visibleSteps }/>
  </>
  );

}