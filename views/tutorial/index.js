<!DOCTYPE html>
<html>
  <head>
    <title>Free Software/Coding Academy</title>
    <%- include('../components/style') %>
  </head>

  <body>
    <%- include('../components/nav', { session: session }) %>
    <div class="container">

        <% if (session.isLoggedIn == true) { %>
          <div class="d-flex justify-content-left">
            <button type="button" class="btn btn-primary btn-dark" data-toggle="modal" data-target="#newTutorial" >Tutorial</button>
          </div>
        <% } %>
    </div>

    <section>
      <div class="container">
              <div class="row align-items-center">
                <table class="table" style="width:100%">
                    <thead class="thead-dark">
                          <div class="card-header text-center" style="width: 100rem;">
                            TUTORIAL
                          </div>
                          <tr>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>VIEW</th>
                            <th>DELETE</th>
                          </tr>
                        <% for(var x=0; x < tutorial.length; x++ ){ %>
                            <tr>
                                <td><%= tutorial[x].title%></td>
                                <td><%= tutorial[x].description%> </td>

                                <td><a href="#" onclick="return false;" class="mr-2 open-AddTutorialDialog" data-id=" <%= tutorial[x].id %>" data-title="<%= tutorial[x].title %>" data-description="<%= tutorial[x].description %>" >Update</a></td>
                                <td><a href="/tutorial/delete/<%= tutorial[x].id %>"  data-confirm="Are you sure you want to delete ?">Delete</a></td>
                            </tr>
                        <% } %>
                      </thead>
                  </table>
              </div>
        </div>

    </section>

    <!-- New Tutorial Modal -->
    <div class="modal fade" id="newTutorial" tabindex="-1" aria-labelledby="newTutorialLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="newTutorialLabel">Tutorial</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="/tutorial" method="POST">
                <div class="modal-body">
                  <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" name="title">
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <input class="form-control" name="description"/>
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button class="btn btn-primary" type="submit">Save changes</button>
                </div>
              </form>
            </div>
          </div>
    </div>
 <!-- End Tutorial Modal -->

  <!-- Update Tutorial Modal -->
  <div class="modal fade" id="updateTutorial" tabindex="-1" aria-labelledby="updateTutorialLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="updateTutorialLabel">Tutorial</h5>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

                <form action="/tutorial/update" method="POST">
                    <div class="modal-body">
                      <input type="text" name="id" id="tutorialId" value="">
                      <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" id="title" name="title"></input>
                      </div>
                      <div class="form-group">
                        <label>Description</label>
                        <input class="form-control" id="description" name="description"></input>
                      </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button class="btn btn-primary" type="submit">Save changes</button>
                    </div>
                </form>

          </div>
        </div>
</div>
<!-- End Update Tutorial Modal -->

    <%- include('../components/footer') %>
    <%- include('../components/script') %>

    <script>
          $(document).on("click", ".open-AddTutorialDialog", function () {
          var tutorialId = $(this).data('id');
          var title = $(this).data('title');
          var description = $(this).data('description');

          $(".modal-body #tutorialId").val( tutorialId );
          $(".modal-body #title").val( title );
          $(".modal-body #description").val( description );

           // As pointed out in comments,
           // it is unnecessary to have to manually call the modal.
           $('#updateTutorial').modal('show');
         });

    </script>
  </body>

</html>
