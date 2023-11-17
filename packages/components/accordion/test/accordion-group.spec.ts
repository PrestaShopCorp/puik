import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PuikAccordionGroup from '../src/accordion-group.vue';
import PuikAccordion from '../src/accordion.vue';
import { getAccordion, getAccordionHeader } from './accordion.spec';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';

let wrapper: VueWrapper<any>;
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      'puik-accordion-group': PuikAccordionGroup,
      'puik-accordion': PuikAccordion
    },
    template,
    ...options
  });
};

const rootClass = 'puik-accordion';
const expandedClass = 'puik-accordion--expanded';

const getAccordionGroup = () => wrapper.find('.puik-accordion-group');
const getAccordions = () => wrapper.findAll(`.${rootClass}`);

describe('AccordionGroup collapse/expand tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-accordion-group>
        <puik-accordion name="accordion-1" title="title-1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title-2">
          Content 2
        </puik-accordion>
        <puik-accordion name="accordion-3" title="title-3">
          Content 3
        </puik-accordion>
      </puik-accordion-group>
    `;
    factory(template);
    expect(wrapper).toBeTruthy();
  });

  it('should accordion be expanded', () => {
    const template = `
      <puik-accordion-group model-value="accordion-1">
        <puik-accordion name="accordion-1" title="title-1">
          Content 1
        </puik-accordion>
      </puik-accordion-group>
    `;
    factory(template);

    const accordion = getAccordion(wrapper);
    expect(accordion.classes()).toContain(expandedClass);
  });

  it('should accordions title have aria-expanded', () => {
    const template = `
      <puik-accordion-group modelValue="accordion-1">
        <puik-accordion name="accordion-1" title="title-1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title-2">
          Content 2
        </puik-accordion>
      </puik-accordion-group>
    `;
    factory(template);

    const accordionsHeaders = getAccordions().map((accordion) =>
      getAccordionHeader(accordion)
    );
    expect(accordionsHeaders[0].attributes('aria-expanded')).toBe('true');
    expect(accordionsHeaders[1].attributes('aria-expanded')).toBe('false');
  });

  it('should have multiple accordions expanded', () => {
    const template = `
      <puik-accordion-group :modelValue="['accordion-1', 'accordion-2']" multiple>
        <puik-accordion name="accordion-1" title="title 1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title 2">
          Content 2
        </puik-accordion>
        <puik-accordion name="accordion-3" title="title 3">
          Content 3
        </puik-accordion>
      </puik-accordion-group>
    `;
    factory(template);

    const accordionsExpanded = wrapper.findAll('.puik-accordion--expanded');
    expect(accordionsExpanded.length).toBe(2);
  });
});
describe('AccordionGroup props tests', () => {
  it('should have contained class', () => {
    const template = `
      <puik-accordion-group contained>
        <puik-accordion name="accordion-1" title="title 1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title 2">
          Content 2
        </puik-accordion>
        <puik-accordion name="accordion-3" title="title 3">
          Content 3
        </puik-accordion>
      </puik-accordion-group>
    `;
    factory(template);

    const group = getAccordionGroup();
    expect(group.classes()).toContain('puik-accordion-group--contained');
  });
  it('should change expanded accordion on v-model change', async () => {
    const template = `
      <puik-accordion-group v-model="expandedAccordions">
        <puik-accordion name="accordion-1" title="title 1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title 2">
          Content 2
        </puik-accordion>
        <puik-accordion name="accordion-3" title="title 3">
          Content 3
        </puik-accordion>
      </puik-accordion-group>
    `;

    factory(template, {
      data() {
        return { expandedAccordions: 'accordion-1' };
      }
    });

    await wrapper.setData({ expandedAccordions: 'accordion-2' });
    await nextTick();

    const accordions = getAccordions();
    expect(accordions[1].classes()).toEqual([rootClass, expandedClass]);
    expect(accordions[2].classes()).toEqual([rootClass]);

    await wrapper.setData({ expandedAccordions: ['accordion-3'] });
    await nextTick();
    expect(accordions[1].classes()).toEqual([rootClass]);
    expect(accordions[2].classes()).toEqual([rootClass, expandedClass]);
  });
  it('should change expanded accordion on click on multiple mode', async () => {
    const template = `
      <puik-accordion-group multiple>
        <puik-accordion name="accordion-1" title="title 1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title 2">
          Content 2
        </puik-accordion>
        <puik-accordion name="accordion-3" title="title 3">
          Content 3
        </puik-accordion>
      </puik-accordion-group>
    `;

    factory(template);

    const accordions = getAccordions();
    const accordionButtons = wrapper.findAll('.puik-accordion__header');

    await accordionButtons[0].trigger('click');
    await accordionButtons[1].trigger('click');
    await nextTick();

    expect(accordions[0].classes()).toEqual([rootClass, expandedClass]);
    expect(accordions[1].classes()).toEqual([rootClass, expandedClass]);
    expect(accordions[2].classes()).toEqual([rootClass]);
  });
});
