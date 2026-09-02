'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function JivePage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic in Place", href: "/latin/jive/basic_in_place", category: "prebronze", isRestricted: true },
    { name: "Fallaway Rock", href: "/latin/jive/fallaway_rock", category: "prebronze", isRestricted: true },
    { name: "Fallaway Throwaway", href: "/latin/jive/fallaway_throwaway", category: "prebronze", isRestricted: true },
    { name: "Link", href: "/latin/jive/link", category: "prebronze", isRestricted: true },
    { name: "Change of Places Right to Left", href:"/latin/jive/change_of_places_r_to_l", category:"prebronze", isRestricted: true },
    { name: "Change of Places Left to Right", href: "/latin/jive/change_of_places_l_to_r", category: "prebronze", isRestricted: true },
    { name: "Change of Hands Behind Back", href: "/latin/jive/change_of_hands_behind_back", category: "prebronze", isRestricted: true },
    { name: "Hip Bump", href: "/latin/jive/hip_bump", category: "prebronze", isRestricted: true },
    { name: "American Spin", href: "/latin/jive/american_spin", category: "bronze", isRestricted: true },
    { name: "Promenade Walks", href: "/latin/jive/promenade_walks", category: "bronze", isRestricted: true },
    { name: "Stop and Go", href: "/latin/jive/stop_and_go", category: "bronze", isRestricted: true },
    { name: "Mooch", href: "/latin/jive/mooch", category: "bronze", isRestricted: true },
    { name: "Whip", href: "/latin/jive/whip", category: "bronze", isRestricted: true },
    { name: "Whip Throwaway", href: "/latin/jive/whip_throwaway", category: "bronze", isRestricted: true },
    { name: "Reverse Whip", href: "/latin/jive/reverse_whip", category: "silver", isRestricted: true },
    { name: "Windmill", href: "/latin/jive/windmill", category: "silver", isRestricted: true },
    { name: "Spanish Arms", href: "/latin/jive/spanish_arms", category: "silver", isRestricted: true },
    { name: "Rolling off the Arm", href: "/latin/jive/rolling_off_the_arm", category: "silver", isRestricted: true },
    { name: "Simple Spin", href: "/latin/jive/simple_spin", category: "silver", isRestricted: true },
    { name: "Miami Special", href: "/latin/jive/miami_special", category: "silver", isRestricted: true },
    { name: "Change of Places Right to Left with Double Spin", href: "/latin/jive/change_of_places_r_to_l_double_spin", category: "silver", isRestricted: true },
    { name: "Double Cross Whip", href: "/latin/jive/double_cross_whip", category: "restricted", isRestricted: true },
    { name: "Curly Whip", href: "/latin/jive/curly_whip", category: "gold", isRestricted: true },
    { name: "Overturned Fallaway Throwaway", href: "/latin/jive/overturned_fallaway_throwaway", category: "gold", isRestricted: true },
    { name: "Shoulder Spin", href: "/latin/jive/shoulder_spin", category: "gold", isRestricted: true },
    { name: "Toe Heel Swivels", href: "/latin/jive/toe_heel_swivels", category: "gold", isRestricted: true },
    { name: "Chugging", href: "/latin/jive/chugging", category: "gold", isRestricted: true },
    { name: "Chicken Walks", href: "/latin/jive/chicken_walks", category: "gold", isRestricted: true },
    { name: "Catapult", href: "/latin/jive/catapult", category: "gold", isRestricted: true },
    { name: "Salking Walks, Flicks and Break", href: "/latin/jive/stalking_walks_flicks_and_break", category: "gold", isRestricted: true },
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
    <div className= "flex flex-row w-full h-full gap-4 py-2">
      <SearchBar query={ query } onChangeQuery={ setQuery }/>
      <Filter category={ category } onCategoryChange={ setCategory } />
    </div>
    <LinkBar links={ visibleSteps }/>
  </>
  );

}