'use client'
import LinkBar from "../../ui/homepage/linkbar"
import SearchBar from "../../ui/universal/searchbar"
import Filter from "../../ui/universal/filter"
import { useState } from 'react'

export default function ViennesePage() {

  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const steps: any[] = [
    { name: "Natural Turn", href: "/ballroom/viennese/natural_turn", category: "bronze", isRestricted: true },
    { name: "Reverse Turn", href: "/ballroom/viennese/reverse_turn", category: "bronze", isRestricted: true },
    { name: "Change Steps", href:"/ballroom/viennese/change_steps", category:"bronze", isRestricted: true },
    { name: "Reverse Fleckerl", href: "/ballroom/viennese/reverse_fleckerl", category: "silver" },
    { name: "Natural Fleckerl", href: "/ballroom/viennese/natural_fleckerl", category:"gold" },
    { name: "Contra Check", href: "/ballroom/viennese/contra_check", category:"gold" },
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
