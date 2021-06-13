import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectItem.scss'
export default function ProjectItem({ data }) {
  const { img, title, desc } = data;
  return (
    <div>
      <main class="wrapper">
        <div class="">
          <div class="card">
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" class="project_Img" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

      </main>
    </div>
  );
}
