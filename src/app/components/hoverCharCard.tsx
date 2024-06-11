// // src/app/components/CharacterHoverCard.tsx
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"
// import React, { useEffect, useState } from 'react';
// // import useFetch from '../hooks/useFetch';
// import { Badge } from "@/components/ui/badge"


// interface Character {
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   gender: string;
//   image: string;
//   origin: {
//     name: string;
//   };
// }

// export default function CharacterHoverCard(characterUrl: any) {
//   const [character, setCharacter] = useState<Character | null>(null);
//   const { data, error } = useFetch(characterUrl);

//   console.log(data)
//   useEffect(() => {
//     if (data) {
//       setCharacter(data);
//     }
//   }, [data]);

//   if (error) return <div>Error loading character data.</div>;
//   if (!data) return <div>Loading...</div>;

//   return (
//     <HoverCard>
//       <HoverCardTrigger>
//         <div className="flex items-center space-x-2 cursor-pointer">
//           {/* <img src={character?.image} alt={character?.name} className="w-10 h-10 rounded-full" /> */}
//           <span>{character?.name}</span>
//           <Badge variant="outline">Badge</Badge>
//         </div>
//       </HoverCardTrigger>
//       <HoverCardContent>
//         <div className="p-4 bg-white shadow-lg rounded-lg">
//           {/* <img src={character?.image} alt={character?.name} className="w-20 h-20 rounded-full mx-auto" /> */}
//           <h3 className="text-lg font-bold text-center mt-2">{character?.name}</h3>
//           <p className="text-sm text-gray-600 text-center">{character?.species} - {character?.status}</p>
//           <p className="text-sm text-gray-600 text-center">Gender: {character?.gender}</p>
//           <p className="text-sm text-gray-600 text-center">Origin: {character?.origin.name}</p>
//         </div>
//       </HoverCardContent>
//     </HoverCard>
//   );
// }
