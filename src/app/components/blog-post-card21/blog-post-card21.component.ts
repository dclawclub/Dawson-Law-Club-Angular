import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-post-card21',
  templateUrl: 'blog-post-card21.component.html',
  styleUrls: ['blog-post-card21.component.css'],
})
export class BlogPostCard21 {
  @Input()
  image_alt: string = 'image'
  @Input()
  profile_alt: string = 'profile'
  @Input()
  when: string = '3 days ago'
  @Input()
  rootClassName: string = ''
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJlZCUyMGN1cnRhaW5zfGVufDB8fHx8MTY5MTY1MzkyNHww&ixlib=rb-4.0.3&w=1500'
  @Input()
  title: string = 'Event Topic'
  @Input()
  author: string = 'Jane Doe'
  @Input()
  profile_src: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200'
  @Input()
  description: string = 'Event description'
  @Input()
  label: string = 'Event Title'
  constructor() {}
}
