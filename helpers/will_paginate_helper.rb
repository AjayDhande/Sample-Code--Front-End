module WillPaginateHelper
  class WillPaginateAjaxLinkRenderer < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]["_"] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end
      #@template.link_to_function(text.to_s.html_safe, ajax_call, attributes)
      @template.link_to(text.to_s.html_safe, target, attributes.merge(:onclick => "return ajax_pagination(this)"))
    end
  end

  class WillPaginateAjaxLinkRendererForFAQ < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]["_"] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end
      ajax_call = "$.ajax({url: '#{target}', dataType: 'html'})"
      #@template.link_to_function(text.to_s.html_safe, ajax_call, attributes)
      @template.link_to(text.to_s.html_safe, '#', attributes.merge(:onclick => "showLoader(); #{ajax_call}.done( function(data){ $('#questions_ajax').html(data); }).fail(function(data){ notify('Something Wrong', 'Contact Administrator', 'error'); }).always(function(){ hideLoader(); });"))
    end
  end

  class WillPaginateAjaxLinkRendererForRoyalty < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]["_"] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end
      ajax_call = "$.ajax({url: '#{target}', dataType: 'html'})"
      #@template.link_to_function(text.to_s.html_safe, ajax_call, attributes)
      @template.link_to(text.to_s.html_safe, '#', attributes.merge(:onclick => "showLoader(); #{ajax_call}.done( function(data){ $('#royalty_ajax').html(data); }).fail(function(data){ notify('Something Wrong', 'Contact Administrator', 'error'); }).always(function(){ hideLoader(); });"))
    end
  end

  class WillPaginateAjaxLinkRendererForBrand < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]["_"] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end
      page = target.match(/page=(.*?)&/)[1]
      ajax_call = "$.ajax({url: '#{target}', cache: false, dataType: 'html'})"
      #@template.link_to_function(text.to_s.html_safe, ajax_call, attributes)
      @template.link_to(text.to_s.html_safe, '', attributes.merge(:onclick => "back_button = true; var params = window.location.hash.slice(1).split(';'); if (params.length > 5) { params[5] = #{page}; window.location.hash = '#'+params.join(';');} else window.location.hash = '#brand_new_messages;all;;;;#{page}'; return false;", "data-page" => "#{page}"))
    end
  end

  class WillPaginateAjaxLinkRendererForDownload < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]["_"] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end
      ajax_call = "$.ajax({url: '#{target}', dataType: 'html'})"
      #@template.link_to_function(text.to_s.html_safe, ajax_call, attributes)
      @template.link_to(text.to_s.html_safe, '#', attributes.merge(:onclick => "showLoader(); #{ajax_call}.done( function(data){ $('#DownloadMedia').html(data); }).fail(function(data){ notify('Something Wrong', 'Contact Administrator', 'error'); }).always(function(){ hideLoader(); });"))
    end
  end

  class WillPaginateAjaxLinkRendererForLike < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]["_"] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end
      ajax_call = "$.ajax({url: '#{target}', dataType: 'html'})"
      #@template.link_to_function(text.to_s.html_safe, ajax_call, attributes)
      @template.link_to(text.to_s.html_safe, '#', attributes.merge(:onclick => "showLoader(); #{ajax_call}.done( function(data){ $('#LikedFavouriteMedia').html(data); }).fail(function(data){ notify('Something Wrong', 'Contact Administrator', 'error'); }).always(function(){ hideLoader(); });"))
    end
  end

  class WillPaginateAjaxLinkRendererForRating < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]["_"] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end
      ajax_call = "$.ajax({url: '#{target}', dataType: 'html'})"
      #@template.link_to_function(text.to_s.html_safe, ajax_call, attributes)
      @template.link_to(text.to_s.html_safe, '#', attributes.merge(:onclick => "showLoader(); #{ajax_call}.done( function(data){ $('#RatingForMedia').html(data); }).fail(function(data){ notify('Something Wrong', 'Contact Administrator', 'error'); }).always(function(){ hideLoader(); });"))
    end
  end

  class WillPaginateAjaxLinkRendererForOrder < WillPaginate::ActionView::LinkRenderer
    def prepare(collection, options, template)
      options[:params] ||= {}
      options[:params]["_"] = nil
      super(collection, options, template)
    end

    protected
    def link(text, target, attributes = {})
      if target.is_a? Fixnum
        attributes[:rel] = rel_value(target)
        target = url(target)
      end
      ajax_call = "$.ajax({url: '#{target}', dataType: 'html'})"
      #@template.link_to_function(text.to_s.html_safe, ajax_call, attributes)
      @template.link_to(text.to_s.html_safe, '#', attributes.merge(:onclick => "showLoader(); #{ajax_call}.done( function(data){ $('#OrderlistForMedia').html(data); }).fail(function(data){ notify('Something Wrong', 'Contact Administrator', 'error'); }).always(function(){ hideLoader(); });"))
    end
  end

  def ajax_will_paginate(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateAjaxLinkRenderer))
  end

  def ajax_will_paginate_for_faq(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateAjaxLinkRendererForFAQ))
  end

  def ajax_will_paginate_for_royalty(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateAjaxLinkRendererForRoyalty))
  end

  def ajax_will_paginate_for_download(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateAjaxLinkRendererForDownload))
  end

  def ajax_will_paginate_for_like(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateAjaxLinkRendererForLike))
  end

  def ajax_will_paginate_for_rating(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateAjaxLinkRendererForRating))
  end

  def ajax_will_paginate_for_orderlist(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateAjaxLinkRendererForOrder))
  end

  def ajax_will_paginate_for_brand(collection, options = {})
    will_paginate(collection, options.merge(:renderer => WillPaginateHelper::WillPaginateAjaxLinkRendererForBrand))
  end
end