const flexContainer = document.getElementById('flexContainer');
const flexDirectionSelect = document.getElementById('flex-direction');   
const justifyContentSelect = document.getElementById('justify-content');
const alignItemsSelect = document.getElementById('align-items');
const gapInput = document.getElementById('gap');
const resetButton = document.getElementById('resetButton');
const growButton = document.getElementById('growButton');
const item1FlexInput = document.getElementById('item1Flex');
const item2FlexInput = document.getElementById('item2Flex');
const item3FlexInput = document.getElementById('item3Flex');

function updateFlexBoxProperties(){
    flexContainer.style.flexDirection = flexDirectionSelect.value;
    flexContainer.style.justifyContent = justifyContentSelect.value;
    flexContainer.style.alignItems = alignItemsSelect.value;
    flexContainer.style.gap = `${gapInput.value}px`;
}

function resetFlexbox() {
    flexDirectionSelect.value = 'row';
    justifyContentSelect.value = 'flex-start';
    alignItemsSelect.value = 'flex-start';
    gapInput.value = '0';
    item1FlexInput.value = '0';
    item2FlexInput.value = '0';
    item3FlexInput.value = '0';
    updateFlexBoxProperties();
    updateFlexGrow();
}

function growAll() {
    item1FlexInput.value = '1';
    item2FlexInput.value = '1';
    item3FlexInput.value = '1';
    updateFlexGrow();
}

function updateFlexGrow() {
    document.getElementById('item1').style.flexGrow = item1FlexInput.value;
    document.getElementById('item2').style.flexGrow = item2FlexInput.value;
    document.getElementById('item3').style.flexGrow = item3FlexInput.value;
}

flexDirectionSelect.addEventListener('change', updateFlexBoxProperties);
justifyContentSelect.addEventListener('change', updateFlexBoxProperties);
alignItemsSelect.addEventListener('change', updateFlexBoxProperties);
gapInput.addEventListener('input', updateFlexBoxProperties);
resetButton.addEventListener('click', resetFlexbox);
growButton.addEventListener('click', growAll);
item1FlexInput.addEventListener('input', updateFlexGrow);
item2FlexInput.addEventListener('input', updateFlexGrow);
item3FlexInput.addEventListener('input', updateFlexGrow);

updateFlexBoxProperties();
updateFlexGrow();
