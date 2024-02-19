// Importez les modules nécessaires de Angular et JointJS
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { dia, shapes } from 'jointjs';


// Définissez le composant
@Component({
  selector: 'app-mon-diagramme',
  templateUrl: './mon-diagramme.component.html',
  styleUrls: ['./mon-diagramme.component.css']
})
export class MonDiagrammeComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef;
  paper: any;

  ngAfterViewInit() {
    this.initializeJointJS();
  }

  private initializeJointJS() {
    const graph = new dia.Graph();
    const paper = new dia.Paper({
      el: this.canvas.nativeElement,
      model: graph,
      width: '100%',
      height: 400,
      gridSize: 10
    });

    // Save the paper instance for later use
    this.setupPaper(paper);

    // Create nodes
    const circle1 = this.createNode('start', 250, 100, 50, 'circle');
    const circle2 = this.createNode('Fin', 400, 100, 50, 'circle');
    const rectangle = this.createNode('envoi email', 325, 300, 80, 'rectangle');

    // Connect nodes with connectors
    this.connectNodes(graph, circle1, rectangle);
    this.connectNodes(graph, rectangle, circle2);
  }

  // Use this method to set up the paper instance for later use
  private setupPaper(paper: dia.Paper) {
    this.paper = paper;
  }

  private createNode(label: string, x: number, y: number, size: number, shape: string) {
    const node = new shapes.standard.Rectangle({
      position: { x, y },
      size: { width: size, height: size },
      attrs: {
        body: {
          rx: shape === 'circle' ? size / 2 : 0,
          ry: shape === 'circle' ? size / 2 : 0,
          fill: shape === 'circle' ? '#ff0000' : '#00ff00',
          stroke: '#000000',
          strokeWidth: 2
        },
        label: {
          text: label,
          fill: '#000000'
        }
      }
    });

    const graph = this.paper.model;
    graph.addCell(node);

    return node;
  }

  private connectNodes(graph: dia.Graph, source: dia.Element, target: dia.Element) {
    const link = new shapes.standard.Link({
      source: { id: source.id },
      target: { id: target.id },
      attrs: {
        line: {
          stroke: '#000000',
          strokeWidth: 2
        }
      }
    });

    graph.addCell(link);
  }
}