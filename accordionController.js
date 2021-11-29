/* eslint-disable no-unused-expressions */
const accordions = {};

const toggleAccordion = (event) => {
  const { index } = event.currentTarget.dataset;
  const accordion = accordions && accordions[index];

  if (!accordion) return;

  const { element, control, content } = accordion;
  const open = !accordion.isOpen;
  accordion.isOpen = open;

  if (open) {
    element.classList.add('open');
  } else {
    element.classList.remove('open');
  }

  control.setAttribute('aria-expanded', open);
  control.setAttribute('aria-expanded', open);
  content.setAttribute('aria-hidden', !open);
};

export default function controller() {
  const accordionElements = document.querySelectorAll('[data-accordion]');

  if (!accordionElements) return;

  accordionElements.forEach((accordion, index) => {
    const control = accordion.querySelector('[data-accordion-control]');
    const content = accordion.querySelector('[data-accordion-content]');

    if (!control || !content) return;

    const isOpen = accordion.classList.contains('open');
    const controlId = control.id || `accordion-control-${index}`;
    const contentId = content.id || `accordion-content-${index}`;

    // Set up the control
    control.addEventListener('click', toggleAccordion);
    control.setAttribute('data-index', index);
    control.setAttribute('aria-controls', contentId);
    control.setAttribute('aria-expanded', isOpen);
    control.id = controlId;

    // Set up the content panel
    content.setAttribute('aria-labelledby', controlId);
    content.setAttribute('aria-hidden', !isOpen);
    content.id = contentId;

    // Add initialized class to the accordion
    accordion.classList.add('is-accordion');

    // Update the accordions object
    accordions[index] = {
      element: accordion,
      control,
      content,
      isOpen,
    };
  });
}

controller();
