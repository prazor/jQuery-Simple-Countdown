/*
Copyright (c) 2014 Zoran Pranjic
Released under the Creative Commons Attribution 4.0 Unported License.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function($) {
	$.fn.simpleCountDown = function(options){
		var settings = $.extend({
			'sec'    : 5
		}, options);

		var logoutTime = settings.sec -1;

		$(this).text('--:--:--');

		thisID = this.attr('id');

		intervalVar = setInterval(function() {
			var hours   = Math.floor(logoutTime / 3600);
			var minutes = Math.floor((logoutTime - (hours * 3600)) / 60);
			var seconds = logoutTime - (hours * 3600) - (minutes * 60);
			if (hours   < 10) { hours   = '0' + hours; }
			if (minutes < 10) { minutes = '0' + minutes; }
			if (seconds < 10) { seconds = '0' + seconds; }
			var myCountdown = hours + ':' + minutes + ':' + seconds;

			if (myCountdown == '00:00:00') {
				clearInterval(intervalVar);
				$('#' + thisID).text(myCountdown);
			}
			else {
				logoutTime = logoutTime - 1;
				$('#' + thisID).text(myCountdown);
			}
		}, 1000);

		return this;

	}
})(jQuery); 
