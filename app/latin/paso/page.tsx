'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function PasoPage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Appel", href: "/latin/paso/appel", category: "prebronze", isRestricted: true },
    { name: "Sur Place", href: "/latin/paso/sur_place", category: "prebronze", isRestricted: true },
    { name: "Basic Movement", href: "/latin/paso/basic_movement", category: "prebronze", isRestricted: true },
    { name: "Chasses to R or L", href: "/latin/paso/chasses_r_l", category: "prebronze", isRestricted: true },
    { name: "Drag", href: "/latin/paso/drag", category: "prebronze", isRestricted: true },
    { name: "Deplacement (Attack)", href: "/latin/paso/deplacement", category: "prebronze", isRestricted: true },
    { name: "Promenade Link (also Promenade Close)", href: "/latin/paso/promenade_link", category: "prebronze", isRestricted: true },
    { name: "Promenade", href: "/latin/paso/promenade", category: "prebronze", isRestricted: true },
    { name: "Ecart (Fallaway Whisk)", href: "/latin/paso/ecart", category: "prebronze", isRestricted: true },
    { name: "Separation", href: "/latin/paso/separation", category: "prebronze", isRestricted: true },
    { name: "Fallaway Ending to Separation", href: "/latin/paso/fallaway_ending_to_separation", category: "bronze", isRestricted: true },
    { name: "Huit", href: "/latin/paso/huit", category: "bronze", isRestricted: true },
    { name: "Sixteen", href: "/latin/paso/sixteen", category: "bronze", isRestricted: true },
    { name: "Promenade and Counter Promenade", href: "/latin/paso/promenade_and_counter_promenade", category: "bronze", isRestricted: true },
    { name: "Grand Circle", href: "/latin/paso/grand_circle", category: "bronze", isRestricted: true },
    { name: "Open Telemark", href: "/latin/paso/open_telemark", category: "bronze", isRestricted: true },
    { name: "La Passe", href: "/latin/paso/la_passe", category: "silver", isRestricted: true },
    { name: "Banderillas", href: "/latin/paso/banderillas", category: "silver", isRestricted: true },
    { name: "Twist Turn", href: "/latin/paso/twist_turn", category: "silver", isRestricted: true },
    { name: "Fallaway Reverse Turn", href: "/latin/paso/fallaway_reverse_turn", category: "silver", isRestricted: true },
    { name: "Coup de Pique", href: "/latin/paso/coup_de_pique", category: "silver", isRestricted: true },
    { name: "Left Foot Variation", href: "/latin/paso/lf_variation", category: "silver", isRestricted: true },
    { name: "Spanish Lines and Flamenco Taps", href: "/latin/paso/spanish_lines_and_flamenco_taps", category: "silver", isRestricted: true },
    { name: "Syncopated Separation", href: "/latin/paso/syncopated_separation", category: "gold", isRestricted: true },
    { name: "Travelling Spins from PP", href: "/latin/paso/travelling_spins_from_pp", category: "gold", isRestricted: true },
    { name: "Travelling Spins from CPP", href: "/latin/paso/travelling_spins_from_cpp", category: "gold", isRestricted: true },
    { name: "Fregolina (also Farol)", href: "/latin/paso/fregolina", category: "gold", isRestricted: true },
    { name: "Twists", href: "/latin/paso/twists", category: "gold", isRestricted: true },
    { name: "Chasse Cape (including Outside Turn)", href: "/latin/paso/chasse_cape", category: "gold", isRestricted: true },
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
    <div className="font-serif font-bold text-center md:text-8xl text-6xl mb-4 text-neutral-300">Paso Doble</div>
    <div className= "flex flex-row w-full h-full gap-4 py-2 pb-8">
      <SearchBar query={ query } onChangeQuery={ setQuery }/>
      <Filter category={ category } onCategoryChange={ setCategory } />
    </div>
    <LinkBar links={ visibleSteps }/>
  </>
  );

}