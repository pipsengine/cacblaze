 'use client';
 
 import { useRouter } from 'next/navigation';
 
 const ContributorCTA = () => {
   const router = useRouter();
   const handleClick = () => {
     router.push('/contact?reason=contribute');
   };
 
   return (
     <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
         <p className="text-lg text-secondary mb-6">
           Join 200+ domain experts contributing to CACBLAZE
         </p>
         <button
           onClick={handleClick}
           className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all"
         >
           Become a Contributor
         </button>
       </div>
     </section>
   );
 };
 
 export default ContributorCTA;
