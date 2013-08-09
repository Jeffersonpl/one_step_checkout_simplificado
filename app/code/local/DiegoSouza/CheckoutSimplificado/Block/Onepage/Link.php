<?php

class DiegoSouza_CheckoutSimplificado_Block_Onepage_Link extends Mage_Core_Block_Template
{
    public function isOnepageCheckoutAllowed()
    {
        return $this->helper('checkoutsimplificado')->isOnepageCheckoutEnabled();
    }

    public function checkEnable()
    {
        return Mage::getSingleton('checkout/session')->getQuote()->validateMinimumAmount();
    }

    public function getOnepageCheckoutUrl()
    {
    	$url	= $this->getUrl('checkoutsimplificado', array('_secure' => true));
        return $url;
    }
}
