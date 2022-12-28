
import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: 'name',
    title: 'dev',
    mentor: {
      name: 'bob',
      title: 'senior dev',
      
    }
    
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={() => {
        const name = prompt('whats your mentors name?');
        setPerson(prev => ({...prev, mentor: {...prev.mentor, name: name}}));
      }}
      >
        멘토 이름 바꾸기
      </button>
      <button onClick={() => {
        const title = prompt('whats your mentors title?');
        setPerson(prev => ({...prev, mentor: {...prev.mentor, title:title}}));
        
      }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  )
}