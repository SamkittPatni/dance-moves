'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function JivePage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Basic in Place", href: "/latin/jive/basic_in_place", category: "bronze" },
    { name: "Fallaway Rock", href: "/latin/jive/fallaway_rock", category: "bronze" },
    { name: "Fallaway Throwaway", href: "/latin/jive/fallaway_throwaway", category: "bronze" },
    { name: "Link", href: "/latin/jive/link", category: "bronze" },
    { name: "Change of Places Right to Left", href:"/latin/jive/change_of_places_r_to_l", category:"bronze" },
    { name: "Change of Places Left to Right", href: "/latin/jive/change_of_places_l_to_r", category: "bronze" },
    { name: "Change of Hands Behind Back", href: "/latin/jive/change_of_hands_behind_back", category: "bronze" },
    { name: "Hip Bump", href: "/latin/jive/hip_bump", category: "bronze" },
    { name: "American Spin", href: "/latin/jive/american_spin", category: "bronze" },
    { name: "Promenade Walks", href: "/latin/jive/promenade_walks", category: "bronze" },
    { name: "Stop and Go", href: "/latin/jive/stop_and_go", category: "bronze" },
    { name: "Mooch", href: "/latin/jive/mooch", category: "bronze" },
    { name: "Whip", href: "/latin/jive/whip", category: "bronze" },
    { name: "Whip Throwaway", href: "/latin/jive/whip_throwaway", category: "bronze" },
    { name: "Reverse Whip", href: "/latin/jive/reverse_whip", category: "silver" },
    { name: "Windmill", href: "/latin/jive/windmill", category: "silver" },
    { name: "Spanish Arms", href: "/latin/jive/spanish_arms", category: "silver" },
    { name: "Rolling off the Arm", href: "/latin/jive/rolling_off_the_arm", category: "silver" },
    { name: "Simple Spin", href: "/latin/jive/simple_spin", category: "silver" },
    { name: "Miami Special", href: "/latin/jive/miami_special", category: "silver" },
    { name: "Change of Places Right to Left with Double Spin", href: "/latin/jive/change_of_places_r_to_l_double_spin", category: "silver" },
    { name: "Double Cross Whip", href: "/latin/jive/double_cross_whip", category: "restricted" },
    { name: "Curly Whip", href: "/latin/jive/curly_whip", category: "gold" },
    { name: "Overturned Fallaway Throwaway", href: "/latin/jive/overturned_fallaway_throwaway", category: "gold" },
    { name: "Shoulder Spin", href: "/latin/jive/shoulder_spin", category: "gold" },
    { name: "Toe Heel Swivels", href: "/latin/jive/toe_heel_swivels", category: "gold" },
    { name: "Chugging", href: "/latin/jive/chugging", category: "gold" },
    { name: "Chicken Walks", href: "/latin/jive/chicken_walks", category: "gold" },
    { name: "Catapult", href: "/latin/jive/catapult", category: "gold" },
    { name: "Salking Walks, Flicks and Break", href: "/latin/jive/stalking_walks_flicks_and_break", category: "gold" },
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