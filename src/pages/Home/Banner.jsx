import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react"


const Banner = () => {
    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
         <div className='flex-1 '>
         <motion.img
            animate={{y: [30, 70, 30]}}
            transition={{duration:10, ease: easeInOut, repeat:Infinity}}
            src="https://i.ibb.co.com/qjHnwnV/young-startup-team-celebrating-business-success-while-using-computer-office.jpg"
            className=" rounded-t-[30px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-[#2f64ff] shadow-2xl w-72 " />
         <motion.img
          animate={{x: [100, 180, 100]}}
          transition={{duration:10, ease: easeInOut, repeat:Infinity}}
            src="https://i.ibb.co.com/pbPWThs/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork.jpg"
            className="rounded-t-[30px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-[#ba28ff] shadow-2xl w-56" />
         </div>
          <div className='flex-1 pt-10'>
          {/* '#ba28ff' */}
            <motion.h1
            animate={{x:30, color: ['#2f64ff', ]  }}
            transition={{duration: 2,  ease: easeIn, }}
            className="text-5xl font-bold ">Find Your <motion.span animate={{color:['#2f64ff', '#ba28ff']}} transition={{duration: 2.5, delay:1}} >Dream Job !</motion.span> </motion.h1>
            <motion.p 
            animate={{x:30,   }}
            transition={{duration: 2, delay: 1, ease: easeIn, }}
            className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </motion.p>
          </div>
        </div>
      </div>
    );
};

export default Banner;