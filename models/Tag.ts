interface Tag {
    name: string;
    version?: string;
    subTags: Tag[];
}