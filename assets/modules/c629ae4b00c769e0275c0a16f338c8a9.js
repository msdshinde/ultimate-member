wp.hooks.addAction( 'um_after_account_tab_changed', 'um_jobboardwp', function( tab_ ) {
	if ( 'jobboardwp' === tab_ ) {
		jb_responsive();
	}
});

wp.hooks.addAction( 'um_account_active_tab_inited', 'um_jobboardwp', function( tab_ ) {
	if ( 'jobboardwp' === tab_ ) {
		jb_responsive();
	}
});

// show header if there is map
wp.hooks.addFilter( 'um_bookmarks_remove_button_args', 'um_jobboardwp', function( data ) {
	data.job_list = true;
	return data;
}, 10 );


wp.hooks.addFilter( 'um_bookmarks_add_button_args', 'um_jobboardwp', function( data ) {
	data += '&job_list=1';
	return data;
}, 10 );
wp.hooks.addFilter("um_bookmarks_remove_button_args","um_jobboardwp",function(o){return o.job_list=!0,o},10),wp.hooks.addFilter("um_bookmarks_add_button_args","um_jobboardwp",function(o){return o+="&job_list=1"},10);
jQuery(document).ready(function () {
	if ( typeof ( um_recaptcha_refresh ) === 'function' ) {
		jQuery( document ).on( "um_messaging_open_login_form", function (e) {
			um_recaptcha_refresh();
		});

		jQuery( document ).on( "um_messaging_close_login_form", function (e) {
			um_recaptcha_refresh();
		});
	}
});

/**
 * reCAPTCHA v3
 * @see https://developers.google.com/recaptcha/docs/v3
 * @since version 2.1.2 [2019-09-20]
 */
if (typeof (umRecaptchaData) !== 'undefined' && umRecaptchaData.version === 'v3') {

	function um_recaptcha_validate_form(e) {
		e.preventDefault();

		var $form = jQuery(e.target);
		var action = $form.find('.g-recaptcha').data('mode') || 'homepage';

		grecaptcha.execute(umRecaptchaData.site_key, {
			action: action
		}).then(function (token) {

			if ($form.find('[name="g-recaptcha-response"]').length) {
				$form.find('[name="g-recaptcha-response"]').val(token);
			} else {
				$form.append('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
			}

			$form.off('submit', um_recaptcha_validate_form).trigger('submit');
		});
	}

	grecaptcha.ready(function () {
		jQuery('.g-recaptcha').closest('form').on('submit', um_recaptcha_validate_form);
	});
}

function um_recaptcha_validate_form(e){e.preventDefault();var a=jQuery(e.target),e=a.find(".g-recaptcha").data("mode")||"homepage";grecaptcha.execute(umRecaptchaData.site_key,{action:e}).then(function(e){a.find('[name="g-recaptcha-response"]').length?a.find('[name="g-recaptcha-response"]').val(e):a.append('<input type="hidden" name="g-recaptcha-response" value="'+e+'">'),a.off("submit",um_recaptcha_validate_form).trigger("submit")})}jQuery(document).ready(function(){"function"==typeof um_recaptcha_refresh&&(jQuery(document).on("um_messaging_open_login_form",function(e){um_recaptcha_refresh()}),jQuery(document).on("um_messaging_close_login_form",function(e){um_recaptcha_refresh()}))}),"undefined"!=typeof umRecaptchaData&&"v3"===umRecaptchaData.version&&grecaptcha.ready(function(){jQuery(".g-recaptcha").closest("form").on("submit",um_recaptcha_validate_form)});
/**
 * reCAPTCHA v3
 * @see https://developers.google.com/recaptcha/docs/v3
 * @since version 2.1.2 [2019-09-20]
 */
function um_recaptcha_validate_form( e ) {
	e.preventDefault();

	var $form = jQuery( e.target );

	grecaptcha.execute( umRecaptchaData.site_key, {
		action: 'login'
	}).then( function( token ) {

		if ( $form.find('[name="g-recaptcha-response"]').length ) {
			$form.find('[name="g-recaptcha-response"]').val( token );
		} else {
			$form.append('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
		}

		$form.off( 'submit', um_recaptcha_validate_form ).trigger( 'submit' );
	});
}

grecaptcha.ready( function() {
	jQuery('.g-recaptcha').closest('form').on( 'submit', um_recaptcha_validate_form );
});

function um_recaptcha_validate_form(e){e.preventDefault();var a=jQuery(e.target);grecaptcha.execute(umRecaptchaData.site_key,{action:"login"}).then(function(e){a.find('[name="g-recaptcha-response"]').length?a.find('[name="g-recaptcha-response"]').val(e):a.append('<input type="hidden" name="g-recaptcha-response" value="'+e+'">'),a.off("submit",um_recaptcha_validate_form).trigger("submit")})}grecaptcha.ready(function(){jQuery(".g-recaptcha").closest("form").on("submit",um_recaptcha_validate_form)});