
export default function DataList() {
    const everyOneElse = people.filter((person) =>{
        return person.profession !== 'chemist'
      } ).map(person1 => <li key={person1.id}>
           <img
             src={getImageUrl(person1)}
             alt={person1.name}
           />
           <p>
             <b>{person1.name}:</b>
             {' ' + person1.profession + ' '}
             known for {person1.accomplishment}
           </p>
         </li>)
     
       const chemist = people.filter((person) => {
         return person.profession ==='chemist'
       }).map(person1 => <li key={person1.id}>
           <img
             src={getImageUrl(person1)}
             alt={person1.name}
           />
           <p>
             <b>{person1.name}:</b>
             {' ' + person1.profession + ' '}
             known for {person1.accomplishment}
           </p>
         </li>)
      
       return (
         <article>
           <h1>EveryOneElse</h1>
           <ul>{everyOneElse}</ul>
     
           <h1>chemist</h1>
           <ul>{chemist}</ul>
         </article>
       );
}


export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];

  
  export function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
  