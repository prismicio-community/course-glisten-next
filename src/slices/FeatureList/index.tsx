import Bounded from "@/components/Bounded";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `FeatureList`.
 */
export type FeatureListProps = SliceComponentProps<Content.FeatureListSlice>;

/**
 * Component for "FeatureList" Slices.
 */
const FeatureList = ({ slice }: FeatureListProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-5">
        <div className="col-span-2 flex flex-col justify-center gap-4">
          <h2 className="text-4xl">
            <PrismicText field={slice.primary.heading} />
          </h2>
          <div className="max-w-md text-slate-300">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <hr className="opacity-15 my-8" />
          <dl className="space-y-8">
            {slice.primary.features.map((feature) => (
              <div key={asText(feature.title)} className="flex">
                <dt className="flex-1">
                  <PrismicText field={feature.title} />
                </dt>
                <dd className="flex-1 text-slate-300">
                  <PrismicRichText field={feature.description} />
                </dd>
              </div>
            ))}
          </dl>
          <hr className="opacity-15 my-8" />
          <ul className="grid gap-4 grid-cols-4">
            {slice.primary.checklist.map((item) => (
              <li key={item.label} className="col-span-1 text-sm text-slate-300">
                <PrismicNextImage field={item.icon} className="w-6 h-6 object-cover mb-2"/>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <PrismicNextImage
          field={slice.primary.image}
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={clsx(
            "rounded-xl col-span-2 lg:col-span-3 h-full object-cover",
            slice.variation === "reversed" && "md:-order-1",
          )}
        />
      </div>
    </Bounded>
  );
};

export default FeatureList;
