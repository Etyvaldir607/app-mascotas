
export interface Felino {
    id?: string;
    name?: string;
    description?: string;
    life_span?: string;
    origin?: string;
    wikipedia_url?: string;
    vetstreet_url?: string;
    reference_image_id?: string;
    image?: Image ;
}


interface Image{
    //breeds?: any;
    //categories?: any;
    id?: string;
    url?: string;
    width?: number;
    height?: number;
}