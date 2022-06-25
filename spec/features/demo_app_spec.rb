require 'rails_helper'

# In RSpec, feature specs like like full integration tests
RSpec.describe 'DemoApp React Component', :js do
  describe 'demo #index' do
    context 'when interacting in the component' do
      it 'renders default data' do
        visit demo_path

        expect(page).to have_text 'Some text: This is some initialization data passed to the component on initial render'
        expect(page).to have_text 'Q: Is Earth flat? A: false'
        expect(page).to have_text 'Some url: /data.json'
      end

      it 'toggles a panel' do
        visit demo_path

        expect(page).not_to have_text 'Hello! I\'m a panel that can be toggled.'

        click_button 'Show panel'
        expect(page).to have_text 'Hello! I\'m a panel that can be toggled.'

        click_button 'Hide panel'
        expect(page).not_to have_text 'Hello! I\'m a panel that can be toggled.'
      end

      it 'fetches and renders data' do
        visit demo_path
        
        expect(page).to have_button('Fetch data', disabled: true)
        expect(page).to have_button('Clear data', disabled: true)
        expect(page).not_to have_text '12345678'

        click_button 'Show panel'
        expect(page).to have_button('Fetch data', disabled: false)
        expect(page).to have_button('Clear data', disabled: false)

        click_button 'Fetch data'
        expect(page).not_to have_button('Fetch data')
        expect(page).to have_button('Loading...')
        expect(page).to have_text 'Note: click the "Fetch data" button above to populate me: 12345678'
        expect(page).to have_button('Fetch data')
        expect(page).not_to have_button('Loading...')
        
        click_button 'Clear data'
        expect(page).not_to have_text 'Note: click the "Fetch data" button above to populate me: 123455678'
      end
    end
  end
end
