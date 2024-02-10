import { Component, ElementRef, ViewChild } from '@angular/core';
import { Family } from 'projects/core-ui/src/lib/models/family.model';
import { TreeNode } from 'projects/core-ui/src/lib/models/node.model';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { HttpClient } from '@angular/common/http';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  csvRecords: any;
  private httpClient: HttpClient;
  header: boolean = true;
  title = 'FamilyTree';
  family: Family;
  @ViewChild('contentToConvert', { static: false }) contentToConvert: ElementRef;

  constructor(private ngxCsvParser: NgxCsvParser, http: HttpClient) {
    this.httpClient = http;
    this.family = new Family();
    let ddd: string = "";
    this.httpClient.get('assets/data.txt', { responseType: 'text' })
      .subscribe(data =>
        this.asignNodes(data)
      );
  }

  asignNodes(ddd: string) {
    let csvData: Array<any> = this.ngxCsvParser.csvStringToArray(ddd, ",");
    console.log(csvData);
    let arrayTreeNodes = new Array<TreeNode>();
    for (let x = 1; x < csvData.length; x++) {
      arrayTreeNodes.push(new TreeNode(csvData[x][0] as number, csvData[x][1], csvData[x][2], csvData[x][3], csvData[x][4], csvData[x][5] as number));
    }
    //let arrayTreeNodes = new Array<TreeNode>();
    // arrayTreeNodes.push(new TreeNode(1, "Aarohi", "female", "child", "", 2));
    // arrayTreeNodes.push(new TreeNode(2, "Amar-Rutuja", "male", "child", "", 3));
    // arrayTreeNodes.push(new TreeNode(3, "Rajaram-Indubai", "male", "child", "", 4));
    // arrayTreeNodes.push(new TreeNode(4, "Haribhau-Tanhubai", "male", "child", "", 13));
    // arrayTreeNodes.push(new TreeNode(5, "Ramchandra-Kisabai", "male", "child", "", 4));
    // arrayTreeNodes.push(new TreeNode(6, "Sushila Shankar Shelar", "female", "child", "", 3));
    // arrayTreeNodes.push(new TreeNode(7, "Asha Satish Sanas", "female", "child", "", 3));
    // arrayTreeNodes.push(new TreeNode(8, "Vaishali Nilesh Mandhare", "female", "child", "", 3));
    // arrayTreeNodes.push(new TreeNode(9, "Rekha Dynandev Nawghane", "female", "child", "", 5));
    // arrayTreeNodes.push(new TreeNode(10, "Tulshidas", "male", "child", "", 5));
    // arrayTreeNodes.push(new TreeNode(11, "Anibai Washivale", "female", "child", "", 4));
    // arrayTreeNodes.push(new TreeNode(12, "Fulabai Wadkar", "female", "child", "", 4));
    // arrayTreeNodes.push(new TreeNode(13, "Maruti-Yamunabai", "male", "self", "", 0));
    // arrayTreeNodes.push(new TreeNode(14, "Narayan-Chingabai", "male", "child", "", 13));
    // arrayTreeNodes.push(new TreeNode(15, "Ganpat-Venubai", "male", "child", "", 14));
    // arrayTreeNodes.push(new TreeNode(16, "Ekanath-Sharada", "male", "child", "", 15));
    // arrayTreeNodes.push(new TreeNode(17, "Shankar-Usha", "male", "child", "", 15));
    // arrayTreeNodes.push(new TreeNode(18, "Nabibai Shelar", "female", "child", "", 14));
    // arrayTreeNodes.push(new TreeNode(19, "Priyanka Ajit Khatape", "female", "child", "", 16));

    let selfParent = arrayTreeNodes.filter(data => data.parentId == 0);
    this.family.nodes = selfParent;
    let childs1 = arrayTreeNodes.filter(data => data.parentId == selfParent[0].id);
    if (childs1.length > 0) {
      for (let a = 0; a < childs1.length; a++) { // haribhau
        let family1 = new Family();
        family1.nodes.push(childs1[a]);
        family1.children = new Array<Family>();
        let childs2 = arrayTreeNodes.filter(data => data.parentId == childs1[a].id);
        if (childs2.length > 0) {
          for (let b = 0; b < childs2.length; b++) { // rajaram,ramchandra
            let family2 = new Family();
            family2.nodes.push(childs2[b]);
            family2.children = new Array<Family>();
            let childs3 = arrayTreeNodes.filter(data => data.parentId == childs2[b].id);
            if (childs3.length > 0) {
              for (let c = 0; c < childs3.length; c++) { // Amar
                let family3 = new Family();
                family3.nodes.push(childs3[c]);
                family3.children = new Array<Family>();
                let childs4 = arrayTreeNodes.filter(data => data.parentId == childs3[c].id);
                if (childs4.length > 0) {
                  for (let d = 0; d < childs4.length; d++) { // Amar
                    let family4 = new Family();
                    family4.nodes.push(childs4[d]);
                    family4.children = new Array<Family>();
                    let childs5 = arrayTreeNodes.filter(data => data.parentId == childs4[d].id);
                    if (childs5.length > 0) {
                      for (let e = 0; e < childs5.length; e++) { // Amar
                        let family5 = new Family();
                        family5.nodes.push(childs5[e]);
                        family5.children = new Array<Family>();
                        let childs6 = arrayTreeNodes.filter(data => data.parentId == childs5[e].id);
                        if (childs6.length > 0) {
                          for (let f = 0; f < childs6.length; f++) { // Amar
                            let family6 = new Family();
                            family6.nodes.push(childs6[f]);
                            family6.children = new Array<Family>();
                            let childs7 = arrayTreeNodes.filter(data => data.parentId == childs6[f].id);
                            if (childs7.length > 0) {
                              for (let g = 0; g < childs7.length; g++) { // Amar
                                let family7 = new Family();
                                family7.nodes.push(childs7[g]);
                                family7.children = new Array<Family>();
                                let childs8 = arrayTreeNodes.filter(data => data.parentId == childs7[g].id);
                                if (childs8.length > 0) {
                                  for (let h = 0; h < childs8.length; h++) { // Amar
                                    let family8 = new Family();
                                    family8.nodes.push(childs8[h]);
                                    family8.children = new Array<Family>();
                                    let childs9 = arrayTreeNodes.filter(data => data.parentId == childs8[h].id);
                                    if (childs9.length > 0) {
    
                                    }
                                    family7.children.push(family8);
                                  }
                                }
                                family6.children.push(family7);
                              }
                            }
                            family5.children.push(family6);
                          }
                        }
                        family4.children.push(family5);
                      }
                    }
                    family3.children.push(family4);
                  }
                }
                family2.children.push(family3);
              }
            }
            family1.children.push(family2);
          }
        }
        this.family.children.push(family1);
      }
    }
    //this.Screen();
  }

  Screen() {
    const contentToConvert = this.contentToConvert.nativeElement;
    html2canvas(this.contentToConvert.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jspdf();
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.contentToConvert.nativeElement.innerHTML)
      PDF.save('angular-invoice-pdf-demo.pdf');
    });
  }

  // public downloadAsPDF() {
  //   const doc = new jsPDF();

  //   // const specialElementHandlers = {
  //   //   '#editor': function (element, renderer) {
  //   //     return true;
  //   //   }
  //   // };

  //   const contentToConvert = this.contentToConvert.nativeElement;

  //   doc.html(contentToConvert.innerHTML);

  //   doc.save('tableToPdf.pdf');
  // }

}
