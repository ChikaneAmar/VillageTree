export class TreeNode {
  id: number;
  name: string;
  gender: string;
  relationship: string;
  native: string;
  parentId: number;
  constructor(id: number, name: string, gender: string, relationship: string, native: string, parentId: number) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.relationship = relationship;
    this.native = native;
    this.parentId = parentId;
  }
}
