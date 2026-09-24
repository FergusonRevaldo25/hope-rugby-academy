export type Field = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "date" | "datetime-local" | "select" | "checkbox" | "url" | "image";
  required?: boolean;
  options?: { label: string; value: string }[];
};

export type CollectionConfig = {
  title: string;
  singular: string;
  fields: Field[];
  imageField?: string;
  consentField?: string;
};

export const COLLECTIONS: Record<string, CollectionConfig> = {
  coaches: {
    title: "Coaches", singular: "Coach",
    fields: [
      {key:"name",label:"Name",required:true},{key:"role",label:"Role",required:true},
      {key:"focus",label:"Focus",required:true},{key:"bio",label:"Bio",type:"textarea",required:true},
      {key:"photoSrc",label:"Photo",type:"image"},{key:"photoAlt",label:"Photo alt text"},
    ], imageField:"photoSrc"
  },
  players: {
    title:"Age Groups", singular:"Age Group",
    fields:[
      {key:"ageRange",label:"Age range",required:true},{key:"name",label:"Name",required:true},
      {key:"focus",label:"Focus",required:true},{key:"photoSrc",label:"Photo",type:"image"},
      {key:"photoAlt",label:"Photo alt text"},{key:"photoConsent",label:"Guardian photo consent",type:"checkbox"},
    ], imageField:"photoSrc", consentField:"photoConsent"
  },
  events: {
    title:"Events", singular:"Event",
    fields:[
      {key:"title",label:"Title",required:true},{key:"type",label:"Type",type:"select",required:true,
       options:["match","tournament","awards","clinic","other"].map(v=>({label:v,value:v}))},
      {key:"start",label:"Start",type:"datetime-local",required:true},{key:"end",label:"End",type:"datetime-local"},
      {key:"venue",label:"Venue"},{key:"address",label:"Address"},{key:"description",label:"Description",type:"textarea"},
      {key:"photoSrc",label:"Photo",type:"image"},{key:"photoAlt",label:"Photo alt text"},
      {key:"photoConsent",label:"Photo consent",type:"checkbox"},{key:"result",label:"Result"},
    ], imageField:"photoSrc", consentField:"photoConsent"
  },
  gallery: {
    title:"Gallery", singular:"Gallery photo",
    fields:[
      {key:"photoSrc",label:"Photo",type:"image",required:true},{key:"photoAlt",label:"Photo alt text"},
      {key:"caption",label:"Caption"},{key:"photoConsent",label:"Photo consent",type:"checkbox",required:true},
    ], imageField:"photoSrc", consentField:"photoConsent"
  },
  sponsors: {
    title:"Sponsors", singular:"Sponsor",
    fields:[
      {key:"name",label:"Name",required:true},{key:"tier",label:"Tier",required:true},
      {key:"description",label:"Description",type:"textarea",required:true},{key:"logoSrc",label:"Logo",type:"image"},
      {key:"logoAlt",label:"Logo alt text"},{key:"website",label:"Website",type:"url"},
      {key:"contributed",label:"Contribution (ZAR)",type:"number"},
    ], imageField:"logoSrc"
  },
  news: {
    title:"News", singular:"News item",
    fields:[
      {key:"title",label:"Title",required:true},{key:"excerpt",label:"Excerpt",type:"textarea",required:true},
      {key:"date",label:"Date",type:"date",required:true},
      {key:"category",label:"Category",type:"select",required:true,
       options:["general","training","players","coaches","sponsors"].map(v=>({label:v,value:v}))},
      {key:"photoSrc",label:"Photo",type:"image"},{key:"photoAlt",label:"Photo alt text"},
      {key:"href",label:"Link"},{key:"photoConsent",label:"Photo consent",type:"checkbox"},
    ], imageField:"photoSrc", consentField:"photoConsent"
  },
  funds: {
    title:"Funds", singular:"Fund",
    fields:[
      {key:"name",label:"Name",required:true},{key:"icon",label:"Icon / emoji",required:true},
      {key:"goal",label:"Goal (ZAR)",type:"number",required:true},{key:"raised",label:"Raised (ZAR)",type:"number"},
      {key:"description",label:"Description",type:"textarea",required:true},
    ]
  },
  faqs: {
    title:"FAQs", singular:"FAQ",
    fields:[
      {key:"question",label:"Question",required:true},{key:"answer",label:"Answer",type:"textarea",required:true},
    ]
  },
};

export const getCollection = (name:string) => COLLECTIONS[name];
