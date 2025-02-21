import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import liverPackageImg from "../../assets/packages/a.jpg";
import kidneyPackageImg from "../../assets/packages/b.jpg";
import stomachPackageImg from "../../assets/packages/c.jpg";
import pregnantPackageImg from "../../assets/packages/d.jpg";
import bonePackageImg from "../../assets/packages/e.jpg";
import anemiaPackageImg from "../../assets/packages/f.jpg";
import headachPackageImg from "../../assets/packages/g.jpg";
import thinPackageImg from "../../assets/packages/h.jpg";
import bleedingPackageImg from "../../assets/packages/i.jpg";
import hairPackageImg from "../../assets/packages/l.jpg";
import heartPackageImg from "../../assets/packages/k.jpg";
import overWeightPackageImg from "../../assets/packages/q.jpg";
import hypertensionPackageImg from "../../assets/packages/j.jpg";
import diabetesPackageImg from "../../assets/packages/m.jpg";

const callouts = [
  {
    name: "باقة تحاليل اضطرابات الكبد",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: liverPackageImg,
    imageAlt: "باقة-الكبد",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة الكبد.",
  },
  {
    name: "باقة-الكلى",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: kidneyPackageImg,
    imageAlt: "باقة-الكلى",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة الكلى.",
  },
  {
    name: "باقة الم المعدة",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: stomachPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة ألم المعدة.",
  },
  {
    name: "باقة تاخر الحمل",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: pregnantPackageImg,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة تأخر الحمل.",
  },
  {
    name: "باقه الام العظام",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: bonePackageImg,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة آلام العظام.",
  },
  {
    name: "باقه الانيميا",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: anemiaPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة الأنيميا.",
  },
  {
    name: "باقه الصداع",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: headachPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة الصداع.",
  },
  {
    name: "باقه النحافه",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: thinPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة النحافة.",
  },
  {
    name: "باقه تحاليل النزيف",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: bleedingPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة تحاليل النزيف.",
  },
  {
    name: "باقه تساقط الشعر",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: hairPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=مرحبًا، أود الاستفسار عن تفاصيل باقة تساقط الشعر.",
  },
  {
    name: "باقه جلطات القلب",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: heartPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=بخصوص%20باقه%20جلطات%20القلب",
  },
  {
    name: "باقه زياده الوزن",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: overWeightPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=بخصوص%20باقه%20زياده%20الوزن",
  },
  {
    name: "باقه ضغظ الدم",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: hypertensionPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=بخصوص%20باقه%20ضغظ%20الدم",
  },
  {
    name: "باقه متابعه السكر",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageSrc: diabetesPackageImg,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://wa.me/201116573311?text=بخصوص%20باقه%20متابعه%20السكر",
  },
];

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 font-ar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("packages.title")}
          </h2>

          <div className="mt-6 space-y-12 lg:grid gap-5 lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            {callouts.map((callout) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                layout
                key={callout.name}
                className="  relative group hover:duration-300 max-sm:mx-auto hover:scale-105 transition-all max-sm:w-10/15"
              >
                <div className="w-full rounded-t-lg  overflow-hidden max-h-1/2  max-sm:h-10/12 sm:aspect-2/1 lg:aspect-square">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full object-fit object-center bg-white   sm:aspect-2/1 lg:aspect-square"
                  />
                </div>
                <div className="bg-[#E8E6DD] rounded-b-lg text-right  w-full p-4 space-y-4">
                  <h3 className="mt-6 text-3xl text-gray-800 ">
                    <span className="relative font-semibold text-gray-500 inset-0" />
                    {callout.name}
                  </h3>
                  <p className="text-base relative font-semibold text-gray-900">
                    {callout.description}
                  </p>
                  <button className="p-3 bg-[#183645] rounded-lg text-[#eff1f2] hover:bg-[#e8e6dd] hover:text-[#13253e] hover:border hover:border-[#183645] transition-all duration-300">
                    <a href={callout.href} target="_blank">
                      التفاصيل
                    </a>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
