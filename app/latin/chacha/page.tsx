'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function ChaChaPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic Movements", href: "/latin/chacha/basic_movements", category: "bronze" },
    { name: "New York", href: "/latin/chacha/new_york", category: "bronze" },
    { name: "Spot Turns", href:"/latin/chacha/spot_turn", category:"bronze" },
    { name: "Shoulder to Shoulder", href: "/latin/chacha/shoulder_to_shoulder", category: "bronze" },
    { name: "Hand to Hand", href: "/latin/chacha/hand_to_hand", category:"bronze" },
    { name: "Three Cha Cha Chas", href: "/latin/chacha/three_cha_cha_cha", category:"bronze" },
    { name: "Side Step", href: "/latin/chacha/side_step", category:"bronze" },
    { name: "There and Back", href: "/latin/chacha/there_and_back", category:"bronze" },
    { name: "Time Steps", href: "/latin/chacha/time_steps", category:"bronze" },
    { name: "Fan", href: "/latin/chacha/fan", category:"bronze" },
    { name: "Alemana", href: "/latin/chacha/alemana", category:"bronze" },
    { name: "Hockey Stick", href: "/latin/chacha/hockey_stick", category:"bronze" },
    { name: "Natural Top", href: "/latin/chacha/natural_top", category:"bronze" },
    { name: "Natural Opening Out Movement", href: "/latin/chacha/natural_opening_out_movement", category:"bronze" },
    { name: "Closed Hip Twist", href: "/latin/chacha/closed_hip_twist", category:"bronze" },
    { name: "Open Hip Twist", href: "/latin/chacha/open_hip_twist", category:"silver" },
    { name: "Reverse Top", href: "/latin/chacha/reverse_top", category:"silver" },
    { name: "Opening Out from Reverse Top", href: "/latin/chacha/opening_out_from_reverse_top", category:"silver" },
    { name: "Aida", href: "/latin/chacha/aida", category:"silver" },
    { name: "Spiral", href: "/latin/chacha/spiral", category:"silver" },
    { name: "Curl", href: "/latin/chacha/curl", category:"silver" },
    { name: "Rope Spinning", href: "/latin/chacha/rope_spinning", category:"silver" },
    { name: "Cross Basic", href: "/latin/chacha/cross_basic", category:"silver" },
    { name: "Cuban Breaks", href: "/latin/chacha/cuban_breaks", category:"silver" },
    { name: "Chase", href: "/latin/chacha/chase", category:"silver" },
    { name: "Advanced Hip Twist", href: "/latin/chacha/advanced_hip_twist", category:"gold" },
    { name: "Hip Twist Spiral", href: "/latin/chacha/hip_twist_spiral", category:"gold" },
    { name: "Turkish Towel", href: "/latin/chacha/turkish_towel", category:"gold" },
    { name: "Sweetheart", href: "/latin/chacha/sweetheart", category:"gold" },
    { name: "Follow My Leader", href: "/latin/chacha/follow_my_leader", category:"gold" },
    { name: "Foot Changes", href: "/latin/chacha/foot_changes", category:"gold" },
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