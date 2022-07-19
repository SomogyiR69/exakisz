import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";

const varrogep = [
  {
    id: 1,
    name: "Exatex EX-1510 hármastovábbítású ipari varrógép",
    price: "535 000 Ft",
    imageSrc: "/ex1510.png",
    imageAlt: "image",
    description:
      "Vastag árus hármas továbbítású varrógép állvánnyal 750 Wattos szervo motorral, tű holtpont megállítóval kompletten állvánnyal asztallappal. Maximális öltéshossz: 11mm, Maximális öltésszám: 2000 öltés/perc, Maximális talpemél: 20mm, Tű típus: 134-35, 230 Vol, 750 Watt",
  },
  {
    id: 2,
    name: "Exatex EX-335B karos hármastovábbítású varrógép nagy körforgóval",
    price: "290 000 Ft",
    imageSrc: "/EX-335.png",
    imageAlt: "image",
    description:
      "Hármas továbbítású karos bőrvarró gép kompletten állvánnyal asztallappal. Főbb jellemzők: Energiatakarékos szervo motorral, térdemelővel, maximális öltéshossz: 5mm, maximális fordulatszám: 2200 öltés/perc., Műszaki adatok: 230 Volt, 750Watt.",
  },
  {
    id: 3,
    name: "Exatex EX-86 automata gyorsvarrógép",
    price: "190 000 Ft",
    imageSrc: "/ex86cut.png",
    imageAlt: "image",
    description:
      "Automata digitális gyorsvarrógép vékony és középnehéz anyagok varrásához. Digitálisan állítható öltéshossz precíz, 0,1 milliméteres pontossággal a léptető motornak köszönhetően. Digitálisan állítható sebesség, variálható öltésképek. Fejbe épített szervo motornak köszönhetően alacsony fogyasztás magas teljesítmény mellett. Alsó és felső tűholtpont megállítás, központi olajozó rendszer. Automatikus szálvágás, automatikus elvarrás a varrat elején és a végén állítható öltésszámmal, automatikus talpemelés. Reteszvarrat és etikett programok a termelékenység növelésért. Beépített orsózó és LED lámpa (állítható fényerővel). A fél- és teljes öltés, illetve visszavarró gomb a tűrúd mellet található, így könnyítve a kezelő munkáját. Bekapcsolható lassú indulás funkció.",
  },
  {
    id: 4,
    name: "Exatex EX-2377D gombfelvarrógép szervo motorral",
    price: "535 000 Ft",
    imageSrc: "/EX-2377D.png",
    imageAlt: "image",
    description:
      "1szálas ipari láncöltésű gombfelvarró gép kompletten állvánnyal asztallappal. Főbb jellemzői: Fejbe épített szervo motorral, két lyukú, 4 lyukú és X varrására alkalmas, opcionálisan füles gomb felvarró aparát vásárolható hozzá. Műszaki adatok: 230 Volt 550 Watt",
  },
  {
    id: 5,
    name: "Exatex EX-6650D-4 Automata tűtolásos gyorsvarrógép",
    price: "535 000 Ft",
    imageSrc: "/EX-6650D.png",
    imageAlt: "image",
    description:
      "Tűtolásos, automata gyorsvarrógép, beépített szervo motorral, kompletten állvánnyal asztallappal. Főbb jellemzői: Energiatakarékos fejbe épített (direct drive) szervo motor, szálvágó, automata talpemelés, automata visszavarrás, etikett programok, program panel, központi olajozás. Műszaki adatok: 230 Volt 550 Watt.",
  },
  {
    id: 6,
    name: "Exatex EX-5530D ipari cikk-cakk varrógép direkt hajtású szervo motorral",
    price: "535 000 Ft",
    imageSrc: "/5530.jpg",
    imageAlt: "image",
    description:
      "Ipari cikk-cakk varrógép kompletten állvánnyal asztallappal. Főbb jellemzői: Maximális cikk-cakk szélesség 8mm, fejbe épített energiatakarékos szervo motor, térdemelő. Műszaki adatok: 230 Volt, 550 Watt.",
  },
];
const szabaszgep = [
  {
    id: 1,
    name: "Exatex EX-700B szalagkéses szabászgép",
    price: "720 000 Ft",
    imageSrc: "/ex700.jpg",
    imageAlt: "image",
    description:
      "Szalagkéses szabászgép. Főbb jellemzői: Automata élező szerkezet, kar távolság 700 mm, asztal méret 1200x1400mm, kés hossz 3500 mm, vágás magasság maximum 180 mm, fokozatmentes sebesség állítás, levegőbefújásos lebegtetés. Műszaki adatok: 230/380 Volt. Motor teljesítmény: 750 Watt. Fújó motor teljesítmény: 250 Watt. Súly 230 Kg.",
  },
  {
    id: 9,
    name: "Exatex EX-801 serfelőgép",
    price: "249 000 Ft",
    imageSrc: "/EX-801.png",
    imageAlt: "image",
    description:
      "Bőrélező (serfelő) gép kompletten állvánnyal, asztallappal, motorral. Főbb jellemzők: Energiatakarékos szervo motor, 15-50mm vágás szélesség, különböző méretű tartozék talpak, kés élező szerkezet. Műszaki adatok: 230 Volt, 550Watt, 1400 fordulat/perc",
  },
  {
    id: 2,
    name: "Exatex EX-100S körkéses szabászgép",
    price: "54 000 Ft",
    imageSrc: "/EX-100S.jpg",
    imageAlt: "image",
    description:
      "Körkéses szabászgép. Főbb jellemzői: 100mm körkés, élező szerkezet, beépített szervó motor, több sebesség fokozat, beépített LED lámpa. Műszaki adatok: 230 Volt 250 Watt.",
  },
  {
    id: 7,
    name: "Exatex EX-125S körkéses szabászgép",
    price: "67 000 Ft",
    imageSrc: "/EX-125S.jpg",
    imageAlt: "image",
    description:
      "Körkéses szabászgép. Főbb jellemzői: 125mm körkés, élező szerkezet, beépített szervó motor, több sebesség fokozat, beépített LED lámpa. Műszaki adatok: 230 Volt 250 Watt.",
  },
  {
    id: 3,
    name: "Exatex EX-108-5 kardkéses szabászgép",
    price: "146 000 Ft",
    imageSrc: "/EX-108.png",
    imageAlt: "image",
    description:
      'Kardkéses szabászgép. Főbb jellemzői: 5" kardkés (12cm), 9,5 cm vágás magasság, automata élező szerkezet. Műszaki adatok: 230 Volt 550 Watt, 2800 fordulat / perc.',
  },
  {
    id: 4,
    name: "Exatex EX-103-6 kardkéses szabászgép",
    price: "146 000 Ft",
    imageSrc: "/EX-103.png",
    imageAlt: "image",
    description:
      'Kardkéses szabászgép. Főbb jellemzői: 6" kardkés (15cm), 12 cm vágás magasság, automata élező szerkezet. Műszaki adatok: 230 Volt 550 Watt, 2800 fordulat / perc.',
  },
  {
    id: 5,
    name: "Exatex EX-103-8 kardkéses szabászgép",
    price: "146 000 Ft",
    imageSrc: "/EX-103.png",
    imageAlt: "image",
    description:
      'Kardkéses szabászgép. Főbb jellemzői: 8" kardkés (20cm), 17 cm vágás magasság, automata élező szerkezet. Műszaki adatok: 230 Volt 550 Watt, 2800 fordulat / perc.',
  },
  {
    id: 6,
    name: "Exatex EX-103-10 kardkéses szabászgép",
    price: "146 000 Ft",
    imageSrc: "/EX-103.png",
    imageAlt: "image",
    description:
      'Kardkéses szabászgép. Főbb jellemzői: 10" kardkés (25cm), 22 cm vágás magasság, automata élező szerkezet. Műszaki adatok: 230 Volt 550 Watt, 2800 fordulat / perc.',
  },
  {
    id: 8,
    name: "Exatex EX-B-1 manuális véglevágógép",
    price: "152 000 Ft",
    imageSrc: "/EX-B-1-MAN.png",
    imageAlt: "image",
    description:
      "Körkéses manuális véglevágó gép Főbb jellemzői: 110mm körkés, élező szerkezet, végtartó berendezéssel. Műszaki adatok:  230 Volt, 250 Watt",
  },
  {
    id: 10,
    name: "Exatex EX-HD fúró-jelölőgép",
    price: "68 000 Ft",
    imageSrc: "/EX-HD.jpg",
    imageAlt: "image",
    description: "Szabászati, fűthető, fúró-jelölő gép. 230 Volt",
  },
];
const vasalo = [
  {
    id: 1,
    name: "Exatex EX-Q2 ipari elszívós vasaló asztal",
    price: "260 000 Ft",
    imageSrc: "/Q2.gif",
    imageAlt: "image",
    description:
      "Elszívós ipari vasalóasztal, Munkaterület: 126*40 cm, 1db karfával, elszívással, asztallap fűtéssel, karfára átkapcsolható elszívással. Műszaki adatok: 230 Volt, Motor 550 Watt, Asztalfűtés: 800 Watt, összesen: 1350 Watt. Méretek: 153*52*100cm",
  },
  {
    id: 2,
    name: "Exatex EX-Q3 ipari elszívós-fújós vasaló asztal",
    price: "320 000 Ft",
    imageSrc: "/Q3.gif",
    imageAlt: "image",
    description:
      "Elszívós-fújós ipari vasalóasztal, Munkaterület: 126*40 cm, 1db karfával, elszívással, fújással, asztallap fűtéssel, karfára átkapcsolható elszívással. Műszaki adatok: 230 Volt, Motor 550 Watt, Asztalfűtés: 800 Watt, összesen: 1350 Watt. Méretek: 153*52*100cm",
  },
];
const presek = [
  {
    id: 1,
    name: "Exatex EX-4040 mechanikus vasaló prés",
    price: "105 000 Ft",
    imageSrc: "/40x40press.jpg",
    imageAlt: "image",
    description:
      "Mechanikus vasaló prés, 40x40cm, digitálisan állítható préselési idő és hőfok, mechanikusan állítható nyomás erő. Műszaki adatok: 230 Volt, 2000 Watt",
  },
  {
    id: 2,
    name: "Exatex EX-6040 mechanikus vasaló prés",
    price: "123 000 Ft",
    imageSrc: "/40x40press.jpg",
    imageAlt: "image",
    description:
      "Mechanikus vasaló prés, 60x40cm, digitálisan állítható préselési idő és hőfok, mechanikusan állítható nyomás erő. Műszaki adatok: 230 Volt, 2000 Watt",
  },
  {
    id: 3,
    name: "Exatex EX-8040 mechanikus vasaló prés",
    price: "155 000 Ft",
    imageSrc: "/40x40press.jpg",
    imageAlt: "image",
    description:
      "Mechanikus vasaló prés, 80x40cm, digitálisan állítható préselési idő és hőfok, mechanikusan állítható nyomás erő. Műszaki adatok: 230 Volt, 2000 Watt",
  },
];
const patent = [
  {
    id: 1,
    name: "Exatex EX-D03 háromfejes szervo patentozógép",
    price: "280 000 Ft",
    imageSrc: "/EX-D03.png",
    imageAlt: "image",
    description:
      "3 fejes programozható, szervo motoros patentozó gép. Főbb jellemzők: Állítható nyomás 150-650 Kg, tartozék lézer jelölő, ujjvédő berendezés. Műszaki adatok: 230 Volt 550 Watt",
  },
  {
    id: 2,
    name: "Exatex EX-D01 egyfejes szervo patentozógép",
    price: "138 000 Ft",
    imageSrc: "/EX-D01.jpg",
    imageAlt: "image",
    description:
      "1 fejes programozható, szervo motoros patentozó gép. Főbb jellemzők: Állítható nyomás 150-650 Kg, tartozék lézer jelölő, ujjvédő berendezés. Műszaki adatok: 230 Volt 550 Watt",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductCard = () => {
  return (
    <>
      <div className="dark:bg-gray-800 bg-white py-4 relative">
        <div className=" mx-auto overflow-hidden sm:px-6 lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="mt-16 space-y-8 mx-4 lg:mx-0">
            <div id="varrogep" className="divide-y divide-gray-200">
              {varrogep.map((product, featureIdx) => (
                <>
                  <div
                    key={product.id}
                    className="flex flex-col lg:grid lg:grid-cols-12 py-4 lg:py-12 first:py-0 last:py-0 first:pb-12 last:pt-12 lg:gap-x-8 lg:items-center"
                  >
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-1"
                          : "lg:col-start-8 xl:col-start-9",
                        "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                      )}
                    >
                      <div className="aspect-w-3 aspect-h-2 mb-2 lg:mb-0 rounded-lg bg-gray-100 overflow-hidden">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          layout="fill"
                          objectFit="contain"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-6 xl:col-start-5"
                          : "lg:col-start-1",
                        "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 text-center"
                      )}
                    >
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {product.name} -{" "}
                        <span className="text-xl text-gray-600 font-bold dark:text-gray-300">
                          {product.price} <span className="text-sm">+ ÁFA</span>
                        </span>
                      </div>
                      <p className="mt-4 text-base  text-gray-900 dark:text-gray-200">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <hr className="border-t" />
            <div id="szabaszgep" className="divide-y divide-gray-200">
              {szabaszgep.map((product, featureIdx) => (
                <>
                  <div
                    key={product.id}
                    className="flex flex-col lg:grid lg:grid-cols-12 py-4 lg:py-12 first:py-0 last:py-0 first:pb-12 last:pt-12 lg:gap-x-8 lg:items-center"
                  >
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-1"
                          : "lg:col-start-8 xl:col-start-9",
                        "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                      )}
                    >
                      <div className="aspect-w-3 aspect-h-2 mb-2 lg:mb-0 rounded-lg bg-gray-100 overflow-hidden">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          layout="fill"
                          objectFit="contain"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-6 xl:col-start-5"
                          : "lg:col-start-1",
                        "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 text-center"
                      )}
                    >
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {product.name} -{" "}
                        <span className="text-xl text-gray-600 font-bold dark:text-gray-300">
                          {product.price} <span className="text-sm">+ ÁFA</span>
                        </span>
                      </div>
                      <p className="mt-4 text-base  text-gray-900 dark:text-gray-200">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <hr className="border-t" />
            <div id="vasalo" className="divide-y divide-gray-200">
              {vasalo.map((product, featureIdx) => (
                <>
                  <div
                    key={product.id}
                    className="flex flex-col lg:grid lg:grid-cols-12 py-4 lg:py-12 first:py-0 last:py-0 first:pb-12 last:pt-12 lg:gap-x-8 lg:items-center"
                  >
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-1"
                          : "lg:col-start-8 xl:col-start-9",
                        "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                      )}
                    >
                      <div className="aspect-w-3 aspect-h-2 mb-2 lg:mb-0 rounded-lg bg-gray-100 overflow-hidden">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          layout="fill"
                          objectFit="contain"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-6 xl:col-start-5"
                          : "lg:col-start-1",
                        "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 text-center"
                      )}
                    >
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {product.name} -{" "}
                        <span className="text-xl text-gray-600 font-bold dark:text-gray-300">
                          {product.price} <span className="text-sm">+ ÁFA</span>
                        </span>
                      </div>
                      <p className="mt-4 text-base  text-gray-900 dark:text-gray-200">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <hr className="border-t" />
            <div id="patent" className="divide-y divide-gray-200">
              {patent.map((product, featureIdx) => (
                <>
                  <div
                    key={product.id}
                    className="flex flex-col lg:grid lg:grid-cols-12 py-4 lg:py-12 first:py-0 last:py-0 first:pb-12 last:pt-12 lg:gap-x-8 lg:items-center"
                  >
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-1"
                          : "lg:col-start-8 xl:col-start-9",
                        "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                      )}
                    >
                      <div className="aspect-w-3 aspect-h-2 mb-2 lg:mb-0 rounded-lg bg-gray-100 overflow-hidden">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          layout="fill"
                          objectFit="contain"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-6 xl:col-start-5"
                          : "lg:col-start-1",
                        "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 text-center"
                      )}
                    >
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {product.name} -{" "}
                        <span className="text-xl text-gray-600 font-bold dark:text-gray-300">
                          {product.price} <span className="text-sm">+ ÁFA</span>
                        </span>
                      </div>
                      <p className="mt-4 text-base  text-gray-900 dark:text-gray-200">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <hr className="border-t" />
            <div id="presek" className="divide-y divide-gray-200">
              {presek.map((product, featureIdx) => (
                <>
                  <div
                    key={product.id}
                    className="flex flex-col lg:grid lg:grid-cols-12 py-4 lg:py-12 first:py-0 last:py-0 first:pb-12 last:pt-12 lg:gap-x-8 lg:items-center"
                  >
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-1"
                          : "lg:col-start-8 xl:col-start-9",
                        "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                      )}
                    >
                      <div className="aspect-w-3 aspect-h-2 mb-2 lg:mb-0 rounded-lg bg-gray-100 overflow-hidden">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          layout="fill"
                          objectFit="contain"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className={classNames(
                        featureIdx % 2 === 0
                          ? "lg:col-start-6 xl:col-start-5"
                          : "lg:col-start-1",
                        "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 text-center"
                      )}
                    >
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {product.name} -{" "}
                        <span className="text-xl text-gray-600 font-bold dark:text-gray-300">
                          {product.price} <span className="text-sm">+ ÁFA</span>
                        </span>
                      </div>
                      <p className="mt-4 text-base  text-gray-900 dark:text-gray-200">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
