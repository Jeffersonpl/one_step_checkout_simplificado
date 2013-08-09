<?php
class DiegoSouza_CheckoutSimplificado_Block_Widget_Gender extends Mage_Customer_Block_Widget_Gender
{
    public function _construct()
    {
        parent::_construct();
        $this->setTemplate('checkoutsimplificado/widget/gender.phtml');
    }
}
