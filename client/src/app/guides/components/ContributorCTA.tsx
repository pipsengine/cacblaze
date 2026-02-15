 'use client';
 
 import { useRouter } from 'next/navigation';
 
 const ContributorCTA = () => {
   const router = useRouter();
   const handleClick = () => {
     if (typeof window !== 'undefined') {
       window.location.assign('/contact?reason=contribute');
     } else {
       try {
         router.push('/contact?reason=contribute');
       } catch {}
     }
   };
 
    return (
      <section className="py-20 bg-white relative pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative pointer-events-auto">
         <p className="text-lg text-secondary mb-6">
           Join 200+ domain experts contributing to CACBLAZE
         </p>
         <button
           type="button"
           onClick={handleClick}
           className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all relative z-50 pointer-events-auto"
         >
           Become a Contributor
         </button>
       </div>
     </section>
   );
 };
 
 export default ContributorCTA;
