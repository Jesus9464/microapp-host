import dynamic from "next/dynamic";

export const Microapp1 = dynamic(() => import("microapp-1/microapp1"), {
  ssr: false,
  suspense: true,
});

export const Microapp2 = dynamic(() => import("microapp-2/microapp2"), {
  ssr: false,
  suspense: true,
});

export const Microapp3 = dynamic(() => import("microapp-3/microapp3"), {
  ssr: false,
  suspense: true,
});
